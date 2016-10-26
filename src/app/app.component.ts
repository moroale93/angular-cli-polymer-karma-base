import { Component } from '@angular/core';
import { SmartTable } from './components/smartTable/smartTable.component';
import { FormPerson } from './components/formPerson/formPerson.component';
import { Router } from '@angular/router';
import { ApiRequester } from './services/apiRequester.service';
import { ConfigProvider } from './services/config.service';
import { ObjFieldsProvider } from './services/objFieldsProvider.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiRequester, ConfigProvider, ObjFieldsProvider] // dico quali provider posso utilizzare da qui in giu!
})
export class AppComponent {
  title = 'colmar works!';
  listOfPeople = [];

  constructor(private router: Router) { }

  addNewPersonToTable(p) {
    this.listOfPeople.push(p);
  }

  tableRowSelect(user) {
    this.router.navigate(['/userDetail', user.id]);
  }
}
