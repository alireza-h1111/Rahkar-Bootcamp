import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , RouterOutlet} from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule , RouterModule , RouterOutlet],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {
  constructor(public stream$:ProductService){}
  product:any[]=this.stream$.products;

}
