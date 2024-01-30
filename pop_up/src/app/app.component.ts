
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from "./form/form.component";
import { TableComponent } from "./table/table.component";
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, RouterOutlet, FormComponent, TableComponent]
})
export class AppComponent {

  showConfirmation = false;

  onFormSubmit(formData: any) {
    // Save form data
    console.log('Form data:', formData);

    // Show confirmation dialog
    this.showConfirmation = true;
  }

  cancelExit() {
    // Cancel action, hide confirmation dialog
    this.showConfirmation = false;
  }

  confirmExit() {
    // Confirm action, do something (e.g., navigate away)
    console.log('Leaving page...');
    this.showConfirmation = false;
  }
}
