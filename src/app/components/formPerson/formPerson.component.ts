import {Component, Output, EventEmitter} from '@angular/core';
import 'rxjs/add/operator/map';

@Component({
  selector: 'form-person',
  templateUrl: './formPerson.component.html',
  styleUrls: ['./formPerson.component.css']
})
export class FormPerson {
  @Output()
  onSubmit = new EventEmitter();

  dialog = { title: '', message: '' };

  constructor() { }

  onSubmitClick(nameField, surnameField, emailField, dialogElement) {
    if (nameField.validate() && surnameField.validate() && emailField.validate()) {
      this.onSubmit.emit({
        firstName: nameField.value,
        lastName: surnameField.value,
        email: emailField.value
      });
      nameField.value = '';
      surnameField.value = '';
      emailField.value = ''; // TODO
    } else {
      dialogElement.open();
    }
  }
}
