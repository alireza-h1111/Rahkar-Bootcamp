import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LogniRegisterService } from '../logni-register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  navigatByUrl: any;
  constructor(
    private fBuilder: FormBuilder,
    private registerService: LogniRegisterService,
    private router : Router
  ) { }
  pressure: FormGroup = this.fBuilder.group({
    password: ['', Validators.required],
    username: ['', Validators.required]
  })
  onHandleSubmit() {
    console.log(this.pressure.value);
    this.registerService.registerUser(this.pressure.value).subscribe({
      next: (data)=>{
        console.log(data);
      }
    }
    )
    this.router.navigateByUrl('/login');

  }
}
