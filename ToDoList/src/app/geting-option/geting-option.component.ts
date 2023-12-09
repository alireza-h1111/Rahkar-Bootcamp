import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-geting-option',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './geting-option.component.html',
  styleUrl: './geting-option.component.scss'
})
export class GetingOptionComponent {
  @Output() sendingListOption = new EventEmitter();
  listOption:string="";
  GettingListOption(event: any){
    this.listOption=event.target.value;
  }
  sendingListOptionByclicking(event: any){
    this.sendingListOption.emit(this.listOption)
  }

}
