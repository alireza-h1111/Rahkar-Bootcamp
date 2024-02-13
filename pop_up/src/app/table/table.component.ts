import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LogniRegisterService } from '../logni-register.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  usersData!: any
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.usersData = this.activatedRoute.snapshot.data['resolverData']
    console.log(this.usersData);
  }
  //  navigating for getting new data
  navigateToForm() {
    this.router.navigate(['form'])
  }
}