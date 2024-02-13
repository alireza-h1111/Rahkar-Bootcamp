import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LogniRegisterService } from '../logni-register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(
    private fBuilder: FormBuilder,
    private loginService: LogniRegisterService,
    private router : Router
  ) { }
  loginControler: FormGroup = this.fBuilder.group({
    password: ['', Validators.required],
    username: ['', Validators.required]
  })

  onSubmit() {
    console.log(this.loginControler.value);
    this.loginService.loginUser(this.loginControler.value).subscribe({
      next: (data)=>{
        this.loginService.setTokenToLocalStorage(data);
      }
    })
    this.router.navigate(['/table'])
  }
}
