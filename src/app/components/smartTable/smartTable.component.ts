import {Component, Input, AfterViewInit, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import 'rxjs/add/operator/map';
import { ApiRequester } from '../../services/apiRequester.service';
import { ObjFieldsProvider } from '../../services/objFieldsProvider.service';
import { Person } from '../../models/person';
import { ListResponse } from '../../models/listResponse';

@Component({
  selector: 'smart-table',
  templateUrl: './smartTable.component.html',
  styleUrls: ['./smartTable.component.css']
  // non agiungo il provider dell'api requester perchè è già presente nella nostra provider hierarchy (presente in app.component)
})

export class SmartTable implements AfterViewInit {
  @ViewChild('grid') gridSel: ElementRef;
  @ViewChild('loadingSpinner') loadingSpinnerSel: ElementRef;
  @Input() people: Person[] = [];
  @Output() onSelect = new EventEmitter();

  public grid;
  public loadingSpinner;
  public page: number = 1;
  public pageSizes: number[] = [10, 25, 50, 100];
  public pageSizeIndex: number = 1;
  public sortOrder: string = null;
  public sort: string = null;
  public maxPage: number;
  public isLoading: boolean = true;
  public table = [
    {
      title: 'First Name',
      path: 'firstName',
      sorting: {
        sortCode: 'fname',
        sortable: true
      }
    }, {
      title: 'Last Name',
      path: 'lastName',
      sorting: {
        sortCode: 'lname',
        sortable: false
      }
    }, {
      title: 'Email',
      path: 'email',
      sorting: {
        sortCode: 'email',
        sortable: true
      }
    }
  ];

  constructor(private backend: ApiRequester, private fieldGetter: ObjFieldsProvider) { }

  ngAfterViewInit() {
    //if (typeof this.gridSel == 'object' && typeof this.gridSel.nativeElement == 'object' && typeof this.gridSel.nativeElement.then == 'function') {
      this.gridSel.nativeElement.then(() => {
          console.log("Fuck yeah"); //todo perchè non entri?????
        this.onGridReady(this.gridSel.nativeElement);
      });
    //}
    console.log(typeof this.gridSel.nativeElement.then)
    this.loadingSpinner = this.loadingSpinnerSel.nativeElement;
    this.updateTable(this.page, this.pageSizeIndex, this.sortOrder, this.sort);
  }

  updateTable(page, pageSizeIndex, sortOrder, sort) {
    this.loadingSpinner.setAttribute('class', 'paper-spinner-lite shown-spinner');
    this.page = page;
    this.pageSizeIndex = pageSizeIndex;
    this.sortOrder = sortOrder;
    this.sort = sort;
    this.backend.getPeople(page, this.pageSizes[this.pageSizeIndex], this.sortOrder, this.sort).subscribe(
      (res: ListResponse<Person>) => {
        this.maxPage = Math.ceil(res.paginationData.count / this.pageSizes[this.pageSizeIndex]);
        if (this.page == res.paginationData.pageNum) {
          this.people = res.results;
          this.loadingSpinner.setAttribute('class', 'paper-spinner-lite hidden-spinner');
        }
      },
      (err) => {
        this.loadingSpinner.setAttribute('class', 'paper-spinner-lite hidden-spinner');
      }
    );
  }

  getField(obj, path: string) {
    return this.fieldGetter.getfield(obj, path);
  }

  onGridReady(gridReady) {
    this.grid = gridReady;

    for (let i = 0; i < this.table.length; i++) {
      this.grid.columns[i].sortable = this.table[i].sorting.sortable;
    }
    this.grid.addEventListener('sort-order-changed', (e: any) => {
      this.onSortingItems(e);
    });

    this.grid.addEventListener('selected-items-changed', (e: any) => {
      this.onSelectItems(e);
    });
  }

  // EVENTS
  onSelectItems(event: any) {
    let selectedIndex: number = event.target.selection.selected()[0];
    if (selectedIndex !== undefined) {
      this.onSelect.emit(this.people[selectedIndex]);
    }
  }

  onSortingItems(sortEvent) {
    sortEvent.preventDefault();
    let newSortCode = this.table[this.grid.sortOrder[0].column].sorting.sortCode;
    let newSortOrder = this.grid.sortOrder[0].direction;
    this.updateTable(1, this.pageSizeIndex, newSortOrder, newSortCode);
  }

  onPaginationDoubleLeft(pageInput) {
    this.onInsertPage(pageInput, 1);
  }

  onPaginationLeft(pageInput) {
    this.onInsertPage(pageInput, this.page - 1);
  }

  onPaginationRight(pageInput) {
    this.onInsertPage(pageInput, this.page + 1);
  }

  onPaginationDoubleRight(pageInput) {
    this.onInsertPage(pageInput, this.maxPage);
  }

  onInsertPage(pageInput, pageValue) {// pageValue avoid to get the value of page inside page element
    let pageIn: number;
    if (pageValue == null) {
      pageIn = +(pageInput.value);
    } else {
      pageIn = pageValue;
    }
    if (pageInput.validate() && pageIn <= this.maxPage && pageIn > 0 && this.page !== pageIn) {
      this.updateTable(pageIn, this.pageSizeIndex, this.sortOrder, this.sort);
    } else {
      pageInput.value = this.page;
    }
  }

  onShowPageChange(e) {
    if (e != null && e.detail != null && e.detail.item != null && e.detail.item.value != null && this.pageSizeIndex != +e.detail.item.value) {
      this.pageSizeIndex = +e.detail.item.value;
      this.page = 1;
      this.updateTable(this.page, this.pageSizeIndex, this.sortOrder, this.sort);
    }
  }
}
