import { PolymerElement } from '@vaadin/angular2-polymer';
import { SmartTable } from './components/smartTable/smartTable.component';
import { FormPerson } from './components/formPerson/formPerson.component';
import { FormRxJs } from './components/formRxJs/formRxJs.component';
import { User } from './components/user/user.component';
import { HideContentDirective } from './directives/structural/myHideContent.directive';
import { HighlightDirective } from './directives/attribute/myHighlight.directive';

export const listOfComponents = [
  PolymerElement('vaadin-grid'),
  PolymerElement('paper-input'),
  PolymerElement('gold-email-input'),
  PolymerElement('paper-button'),
  PolymerElement('paper-dialog'),
  PolymerElement('iron-icon'),
  PolymerElement('paper-dropdown-menu'),
  PolymerElement('paper-item'),
  PolymerElement('paper-listbox'),
  PolymerElement('paper-spinner-lite'),
  SmartTable,
  FormPerson,
  FormRxJs,
  User,
  HideContentDirective,
  HighlightDirective
];
