import { Component } from '@angular/core';
import {NgFor} from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [NgFor],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products=[
    {id:1,name:"Computer",price:2500,selected:true},
    {id:2,name:"Printer",price:4000,selected:false},
    {id:3,name:"Smart Phone",price:5000,selected:true},
  ]
}
