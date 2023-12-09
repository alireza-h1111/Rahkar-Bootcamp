import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule , RouterOutlet, RouterModule],
  templateUrl: './body.component.html',
  styleUrls:['./body.component.scss'],
})
export class BodyComponent {

  @Input() gettingOption!: string
  list: any[]=[];
  ngOnChanges(){
    if(this.gettingOption){
      this.list.push({ Option: this.gettingOption, isDone: false });
    }
  }

  DeleteOption(index: number){
    this.list.splice(index , 1);
  }

  DoneOption(index: number){
    this.list[index].isDone=true;
  }
}
