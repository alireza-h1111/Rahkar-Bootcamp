import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { apiService } from '../apiService.service';
import { IMemory } from '../typings/memoryListTypes.modules';
import { Router, RouterModule } from '@angular/router';
import { faTrashCan,faPen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeModule, } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule , RouterModule , FontAwesomeModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  constructor(private DBservice: apiService,
     private router : Router) {
    //for showing list after any changes
    this.getItems();
  }

  list: IMemory[] = []

  @Output() editOption = new EventEmitter();

  trashIcon = faTrashCan
  faPen = faPen

  // sending id of itme to input component for finding and editing+
  edit(itemId: number) {
    console.log(itemId);
    this.router.navigateByUrl(`/update/${itemId}`);
  }


  getItems() {
    this.DBservice.gettingItemsFromDB().subscribe({
      next: (data) => {
        console.log(data);
        
        this.list = data.result;
      }
    })
  }

  //reducing the length of each option 
  reducing( optionSting : string){
    return optionSting.slice(0,20)
  }


  // delete option button 
  deleteOption(optionId: any) {
    // console.log(this.list[optionId].id);
    
    console.log(optionId);
    
    this.DBservice.deleteOPtion(optionId).subscribe({
      next: (data) => {
        this.getItems();
      }
    })
  }


}

