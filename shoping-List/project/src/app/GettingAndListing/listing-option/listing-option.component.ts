import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IShop } from '../../typings/shopingListTypes.modules';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listing-option',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listing-option.component.html',
  styleUrl: './listing-option.component.scss'
})
export class ListingOptionComponent {
 @Input() listOption !: IShop;
 @Output() deleteOption = new EventEmitter();
 @Output() editOption = new EventEmitter();
 @Output() doneOption = new EventEmitter();

 done(){
  this.doneOption.emit(this.listOption.id)
  console.log(this.listOption.id)
 }
 deleteId(){
  this.deleteOption.emit(this.listOption.id)
  console.log(this.listOption.id)
 }
 edit(){
  this.editOption.emit(this.listOption.id)
  console.log(this.listOption.id)  
 }
 
}
