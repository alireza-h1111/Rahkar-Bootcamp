import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule , FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule , ReactiveFormsModule , RouterOutlet,],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  pressure = new FormGroup({
    password : new FormControl(),
    username : new FormControl(),

  });
  
  passwordControl = new FormControl();
  usernameControl = new FormControl();

  onHandleSubmit() {
    console.log(this.pressure.value);
}
  onHandleClick() {
    console.log(this.usernameControl.value);
    console.log(this.passwordControl.value);
  }
}