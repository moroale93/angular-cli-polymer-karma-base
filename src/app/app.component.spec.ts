/* tslint:disable:no-unused-variable */
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ApiRequester } from './services/apiRequester.service';
import { ConfigProvider } from './services/config.service';
import { ObjFieldsProvider } from './services/objFieldsProvider.service';
import { Router } from '@angular/router';

class RouterStub {
  navigateByUrl(url: string) { return url; }
}

describe('App: ProgettoTestCli', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
          ApiRequester,
          ConfigProvider,
          ObjFieldsProvider,
          { provide: Router, useClass: RouterStub }
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'colmar works!'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('colmar works!');
  }));

  it('should render title in a h1 tag', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('colmar works!');
  }));
});
