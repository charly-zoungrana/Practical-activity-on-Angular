import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products=[
    {id:1,name:"Computer",price:2500,selected:true},
    {id:2,name:"Printer",price:4000,selected:false},
    {id:3,name:"Smart Phone",price:5000,selected:true},
  ];

  constructor() { }

  getAllProducts(){
    return this.products;
  }

  deleteProduct(product:any){
    this.products=this.products.filter(p=>p.id!=product.id);
  }
}
