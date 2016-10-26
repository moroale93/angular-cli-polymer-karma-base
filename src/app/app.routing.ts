import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormRxJs } from './components/formRxJs/formRxJs.component';
import { User } from './components/user/user.component';

const appRoutes: Routes = [
    {
        path: '',
        pathMatch:'full',
        component: FormRxJs
    },{
        path: 'userDetail/:id',
        component: User
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
