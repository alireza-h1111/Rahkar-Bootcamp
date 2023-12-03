import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService } from '../login.service';
import{Observable, Subscriber} from 'rxjs';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
   user: any;
  constructor( public LoginService: LoginService){
  //this. user= LoginService.logedinuser;
  this.LoginService.stream$.subscribe((data)=>{this.user})
  console.log(this.user);
  
  }

}
