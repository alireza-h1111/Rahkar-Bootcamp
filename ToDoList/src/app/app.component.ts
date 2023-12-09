import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body/body.component';
import { GetingOptionComponent } from './geting-option/geting-option.component';
import { HeaderComponent } from "./header/header.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, BodyComponent, GetingOptionComponent, HeaderComponent]
})
export class AppComponent {
  
  gottenOption: string ="";

  gettingOption(event:any){
    this.gottenOption=event
  }
}
