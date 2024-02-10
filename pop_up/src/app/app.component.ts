
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from "./form/form.component";
import { TableComponent } from "./table/table.component";
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogniRegisterService } from './logni-register.service';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, RouterOutlet, FormComponent, TableComponent, RegisterComponent, LoginComponent]
})
export class AppComponent {
    constructor( private tokenChecker: LogniRegisterService){
        this.tokenChecker.checkingAuthentication();
    }
}