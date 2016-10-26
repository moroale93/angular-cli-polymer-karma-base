/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormPerson } from './formPerson.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('FormPerson', () => {
  let component: FormPerson;
  let fixture: ComponentFixture<FormPerson>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPerson ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPerson);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
