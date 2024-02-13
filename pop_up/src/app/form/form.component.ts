import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';

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
    private productService: ProductsService
  ) { }

  @Output() formSubmit = new EventEmitter<any>();

  formData: FormGroup = this.fbuilder.group({
    name: ['', Validators.required],
    price: ['', Validators.required],
  });

  onSubmit() {
    if (this.formData.valid) {
      this.productService.addProducts(this.formData.value).subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.error('Error adding products:', error);
        }
      );
    } else {
      console.error('Invalid form data:', this.formData.errors);
    }
  }
}
