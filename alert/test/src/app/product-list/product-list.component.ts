import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
  imports: [CommonModule]
})
export class ProductListComponent {

  product: any[] = [
    {
      name: 'moze',
      price: '10',
      amount: '10'
    },
    {
      name: 'khiar',
      price: '1',
      amount: '10'
    },
    {
      name: 'goje',
      price: '5',
      amount: '0'
    },
  ]

  buy() {
    window.alert('added to your list');
  }
  share() {
    window.alert("The product has been shared!")
  }
  notify() {
    window.alert("You will be notified when the product goes on sale")
  }


}
