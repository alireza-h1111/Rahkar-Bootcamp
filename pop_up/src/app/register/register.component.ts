import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  constructor( private fBuilder : FormBuilder){}
  pressure: FormGroup = this.fBuilder.group({
    password : ['',Validators.required],
    username : ['',Validators.required]
  })
  onHandleSubmit() {
    console.log(this.pressure.value);
}
}
