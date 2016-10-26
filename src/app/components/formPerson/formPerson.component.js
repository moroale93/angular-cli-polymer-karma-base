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
var FormPerson = (function () {
    function FormPerson() {
        this.onSubmit = new core_1.EventEmitter();
        this.dialog = { title: "", message: "" };
    }
    FormPerson.prototype.onSubmitClick = function (nameField, surnameField, emailField, dialogElement) {
        if (nameField.validate() & surnameField.validate() & emailField.validate()) {
            this.onSubmit.emit({
                firstName: nameField.value,
                lastName: surnameField.value,
                email: emailField.value
            });
            nameField.value = "";
            surnameField.value = "";
            emailField.value = ""; //TODO
        }
        else
            dialogElement.open();
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], FormPerson.prototype, "onSubmit", void 0);
    FormPerson = __decorate([
        core_1.Component({
            selector: 'form-person',
            moduleId: module.id,
            templateUrl: './formPerson.component.html',
            styleUrls: ['./formPerson.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], FormPerson);
    return FormPerson;
}());
exports.FormPerson = FormPerson;
//# sourceMappingURL=formPerson.component.js.map