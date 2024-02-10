import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { formDeactivateGuard } from './form-deactivate.guard';
import { LoginComponent } from './login/login.component';
import { TokenGuard } from './token.guard';
import { APIResolver } from './api.resolver';

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
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'table',
        component: TableComponent,
        canActivate:[TokenGuard],
        resolve:{
            resolverData: APIResolver
        }
    },
    {
        path: 'form',
        component: FormComponent,
        canDeactivate:[formDeactivateGuard]
    },

];
