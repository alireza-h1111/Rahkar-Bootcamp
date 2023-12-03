import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule , FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule ,  FormsModule , ReactiveFormsModule ,RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  constructor( private log : LoginService,private router :Router){

  }
    isLogin : boolean = false;

    login(){
      this.isLogin=this.log.login(this.pressure.value.username, this.pressure.value.password);
    }

  pressure = new FormGroup({
    password : new FormControl(),
    username : new FormControl(),

  });

  onHandleSubmit() {
    // console.log(this.pressure.value);
    this.login()
    if (this.isLogin)
   this.router.navigateByUrl("/profile");
}
}
