/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { User } from './user.component';
import { ActivatedRoute } from '@angular/router';
import { ApiRequester } from '../../services/apiRequester.service';
import { ApiRequesterStub } from '../../testing/apiRequester-stubs';
import { Observable } from 'rxjs/Rx';

describe('User', () => {
  let component: User;
  let fixture: ComponentFixture<User>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        User
    ],
    providers:[
        { provide: ActivatedRoute, useValue: { 'params': Observable.from([{ 'id': '1' }]) } },
        { provide: ApiRequester, useClass: ApiRequesterStub }
    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(User);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
