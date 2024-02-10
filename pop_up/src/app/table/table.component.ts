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
    private gettingUsers: LogniRegisterService,
    private activatedRoute: ActivatedRoute
  ) {
    this.usersData = this.activatedRoute.snapshot.data['resolverData']
    // this.getUsers();
    console.log(this.usersData);
  }
  
  usersList: any[] = []

  //  navigating for getting new data
  navigateToForm() {
    this.router.navigate(['form'])
  }

  //getting users data form DB
  // getUsers(){
  //   this.gettingUsers.getUsers().subscribe({
  //     next : (data) => {
  //       console.log(data);

  //       this.usersList = data.data;
  //     },
  //     error(){
  //       console.log("connection error");
  //     }
  //   })
  // }
}