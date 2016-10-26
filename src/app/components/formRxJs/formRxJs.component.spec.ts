/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormRxJs } from './formRxJs.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('FormRxJs', () => {
  let component: FormRxJs;
  let fixture: ComponentFixture<FormRxJs>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRxJs ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRxJs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
