import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { formDeactivateGuard } from './form-deactivate.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: RegisterComponent
    },
    {
        path: 'table',
        component: TableComponent
    },
    {
        path: 'form',
        component: FormComponent,
        canDeactivate:[formDeactivateGuard]
    },

];
