import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'shoppingList',
        loadChildren: () => import('../app/GettingAndListing/shoppingList.routes').then
        (m => m.shopingList)
    },
];
