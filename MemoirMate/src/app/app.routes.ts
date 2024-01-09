import { Routes } from '@angular/router';
import { InputComponent } from './input/input.component';
import { ListComponent } from './list/list.component';
import { Component, Input } from '@angular/core';

export const routes: Routes = [
    {
        path: "",
        component: InputComponent,
    },
    {
        path: "update/:itemId",
        component: InputComponent,
    },
    {
        path: "list",
        component: ListComponent,
    }
];
