import { Injectable } from '@angular/core';
import{Observable, Subscriber, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  

  products: any[] = [
    {
      id:1,
      names: 'mouse',
      Image: 'assets/mouse.jpg',
      price :"350$",
      description:" this is the best"
    },
    {
      id:2,
      names: 'keyboard',
      Image: 'assets/keyboard.jpg',
      price :"750$",
      description:" this is the best"
    },  
    {
      id:3,
      names: 'coolpad',
      Image: 'assets/coolpad.png',
      price :"650$",
      description:" this is the best"
    },
    {
      id:4,
      names: 'monitor',
      Image: 'assets/monitor.jpg',
      price :"890$",
      description:" this is the best"
    },
  
  ];


}
