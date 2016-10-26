"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
require('rxjs/add/operator/map');
var apiRequester_service_1 = require('../../services/apiRequester.service');
var objFieldsProvider_service_1 = require('../../services/objFieldsProvider.service');
var SmartTable = (function () {
    function SmartTable(backend, fieldGetter) {
        this.backend = backend;
        this.fieldGetter = fieldGetter;
        this.people = [];
        this.onSelect = new core_1.EventEmitter();
        this.page = 1;
        this.pageSizes = [10, 25, 50, 100];
        this.pageSizeIndex = 1;
        this.sortOrder = null;
        this.sort = null;
        this.isLoading = true;
        this.table = [
            {
                title: "First Name",
                path: "firstName",
                sorting: {
                    sortCode: "fname",
                    sortable: true
                }
            }, {
                title: "Last Name",
                path: "lastName",
                sorting: {
                    sortCode: "lname",
                    sortable: false
                }
            }, {
                title: "Email",
                path: "email",
                sorting: {
                    sortCode: "email",
                    sortable: true
                }
            }
        ];
    }
    SmartTable.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.gridSel.nativeElement.then(function () {
            _this.onGridReady(_this.gridSel.nativeElement);
        });
        this.loadingSpinner = this.loadingSpinnerSel.nativeElement;
        this.updateTable(this.page, this.pageSizeIndex, this.sortOrder, this.sort);
    };
    SmartTable.prototype.updateTable = function (page, pageSizeIndex, sortOrder, sort) {
        var _this = this;
        this.loadingSpinner.setAttribute("class", "paper-spinner-lite shown-spinner");
        this.page = page;
        this.pageSizeIndex = pageSizeIndex;
        this.sortOrder = sortOrder;
        this.sort = sort;
        this.backend.getPeople(page, this.pageSizes[this.pageSizeIndex], this.sortOrder, this.sort).subscribe(function (res) {
            _this.maxPage = Math.ceil(res.paginationData.count / _this.pageSizes[_this.pageSizeIndex]);
            if (_this.page == res.paginationData.pageNum) {
                _this.people = res.results;
                _this.loadingSpinner.setAttribute("class", "paper-spinner-lite hidden-spinner");
            }
        }, function (err) {
            _this.loadingSpinner.setAttribute("class", "paper-spinner-lite hidden-spinner");
        });
    };
    SmartTable.prototype.getField = function (obj, path) {
        return this.fieldGetter.getfield(obj, path);
    };
    SmartTable.prototype.onGridReady = function (gridReady) {
        var _this = this;
        this.grid = gridReady;
        for (var i = 0; i < this.table.length; i++)
            this.grid.columns[i].sortable = this.table[i].sorting.sortable;
        this.grid.addEventListener('sort-order-changed', function (e) {
            _this.onSortingItems(e);
        });
        this.grid.addEventListener('selected-items-changed', function (e) {
            _this.onSelectItems(e);
        });
    };
    //EVENTS
    SmartTable.prototype.onSelectItems = function (event) {
        var selectedIndex = event.target.selection.selected()[0];
        if (selectedIndex !== undefined)
            this.onSelect.emit(this.people[selectedIndex]);
    };
    SmartTable.prototype.onSortingItems = function (sortEvent) {
        sortEvent.preventDefault();
        var newSortCode = this.table[this.grid.sortOrder[0].column].sorting.sortCode;
        var newSortOrder = this.grid.sortOrder[0].direction;
        this.updateTable(1, this.pageSizeIndex, newSortOrder, newSortCode);
    };
    SmartTable.prototype.onPaginationDoubleLeft = function (pageInput) {
        this.onInsertPage(pageInput, 1);
    };
    SmartTable.prototype.onPaginationLeft = function (pageInput) {
        this.onInsertPage(pageInput, this.page - 1);
    };
    SmartTable.prototype.onPaginationRight = function (pageInput) {
        this.onInsertPage(pageInput, this.page + 1);
    };
    SmartTable.prototype.onPaginationDoubleRight = function (pageInput) {
        this.onInsertPage(pageInput, this.maxPage);
    };
    SmartTable.prototype.onInsertPage = function (pageInput, pageValue) {
        var pageIn;
        if (pageValue == null)
            pageIn = +(pageInput.value);
        else
            pageIn = pageValue;
        if (pageInput.validate() && pageIn <= this.maxPage && pageIn > 0 && this.page !== pageIn)
            this.updateTable(pageIn, this.pageSizeIndex, this.sortOrder, this.sort);
        else
            pageInput.value = this.page;
    };
    SmartTable.prototype.onShowPageChange = function (e) {
        if (e != null && e.detail != null && e.detail.item != null && e.detail.item.value != null && this.pageSizeIndex != +e.detail.item.value) {
            this.pageSizeIndex = +e.detail.item.value;
            this.page = 1;
            this.updateTable(this.page, this.pageSizeIndex, this.sortOrder, this.sort);
        }
    };
    __decorate([
        core_1.ViewChild('grid'), 
        __metadata('design:type', core_1.ElementRef)
    ], SmartTable.prototype, "gridSel", void 0);
    __decorate([
        core_1.ViewChild('loadingSpinner'), 
        __metadata('design:type', core_1.ElementRef)
    ], SmartTable.prototype, "loadingSpinnerSel", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], SmartTable.prototype, "people", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], SmartTable.prototype, "onSelect", void 0);
    SmartTable = __decorate([
        core_1.Component({
            selector: 'smart-table',
            moduleId: module.id,
            templateUrl: './smartTable.component.html',
            styleUrls: ['./smartTable.component.css']
        }), 
        __metadata('design:paramtypes', [apiRequester_service_1.ApiRequester, objFieldsProvider_service_1.ObjFieldsProvider])
    ], SmartTable);
    return SmartTable;
}());
exports.SmartTable = SmartTable;
//# sourceMappingURL=smartTable.component.js.map