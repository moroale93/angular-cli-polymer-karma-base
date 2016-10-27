/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ApiRequester } from '../../services/apiRequester.service';
import { ApiRequesterStub } from '../../testing/apiRequester-stubs';
import { ObjFieldsProvider } from '../../services/objFieldsProvider.service';
import { SmartTable } from './smartTable.component';
import { By } from '@angular/platform-browser';
import { PolymerElement } from '@vaadin/angular2-polymer';

describe('SmartTable', () => {
  let component: SmartTable;
  let fixture: ComponentFixture<SmartTable>;
  let spy:any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SmartTable,
        PolymerElement('vaadin-grid'),
        PolymerElement('paper-input'),
        PolymerElement('gold-email-input'),
        PolymerElement('paper-button'),
        PolymerElement('paper-dialog'),
        PolymerElement('iron-icon'),
        PolymerElement('paper-dropdown-menu'),
        PolymerElement('paper-item'),
        PolymerElement('paper-listbox'),
        PolymerElement('paper-spinner-lite')],
      providers: [
        { provide: ApiRequester, useClass: ApiRequesterStub },
        ObjFieldsProvider
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
