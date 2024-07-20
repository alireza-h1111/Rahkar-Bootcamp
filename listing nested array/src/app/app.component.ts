
  import { Component, OnInit } from '@angular/core'; 
  import { CommonModule } from '@angular/common';
  import { itemType } from './enums/itemType';
  import { TreeNodeComponent } from "./tree-node/tree-node.component";
import { ApiService } from './api.service';
  
@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, TreeNodeComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
  })
  export class AppComponent {
    constructor(private httpService : ApiService){}
  
    title = 'main';

    selectionList: string[] = [];
    selectedNode: itemType | null = null;
    list: itemType[]= [];

    ngOnInit() {
      this.httpService.gettingDataFromServer().subscribe({
        next: (data) => {
          this.list = data;
        },
        error: (error) => {
          console.error('Error fetching data', error);
        }
      });
    }


    select(item: itemType) {
      this.selectionList.push(item.name);
      this.selectedNode = item;
    }
  }
