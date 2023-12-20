import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { sendingNameAndGettingRnumbers } from './sendingName.service';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl:'./game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent {

  constructor( private form:FormBuilder , private sendName : sendingNameAndGettingRnumbers ){}

  formPre:FormGroup= this.form.group({
    name1:["", Validators.required],
    name2:["", Validators.required]
  });


  firstUserName:string="";
  firstUserScore: number =0;

  secondUserName:string="";
  secondUserScore:number =0;

  diceNumber!:any;

  WinnerMessage:boolean =false;
  Winner!:string;

  onclick(){
    let data = {
      name: this.formPre.get('name1')?.value
    }
    this.firstUserName=this.formPre.get('name1')?.value;
    this.sendName.getMyServerName(data, '1').subscribe()
    // console.log(this.firstUserName);
    // this.names.push(this.firstUserName)
  }

  onSubmit(){
    let data = {
      name: this.formPre.get('name2')?.value
    }
    this.secondUserName=this.formPre.get('name2')?.value;
    this.sendName.getMyServerName(data , "2").subscribe()
    // console.log(this.secondUserName);
    // this.names.push(this.formPre.get('name2')?.value)
  }
  

    makingRanomNumber(){
      this.sendName.getMyNumber().subscribe({
        next: (data:any) => {
          this.diceNumber = data.number
          console.log(this.diceNumber);
          
          if(this.diceNumber>=3) this.firstUserScore++;
          else this.secondUserScore++;

          if (this.secondUserScore==5) {
            this.Winner=this.secondUserName;
            this.WinnerMessage = true;
          }
          else if (this.firstUserScore==5) {
            this.Winner=this.firstUserName;
            this.WinnerMessage = true;
          }

      }});
    }
}
