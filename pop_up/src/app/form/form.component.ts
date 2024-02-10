import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatDialogModule]
})
export class FormComponent {

  constructor(
    private fbuilder: FormBuilder,
    private router: Router,
  ) { }

  @Output() formSubmit = new EventEmitter<any>();

  formData: FormGroup = this.fbuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
  });

  onSubmit() {
    console.log(this.formData.value);
  }

  validateForm(): boolean {
    return true;
  }


  staying(event: boolean) {
    throw new Error('Method not implemented.');
  }
  navigation(event: boolean) {
    this.router.navigateByUrl('/table')
  }
}
