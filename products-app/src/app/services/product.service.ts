import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products=[
    {id:1,name:"Computer",price:2500,selected:true},
    {id:2,name:"Printer",price:4000,selected:false},
    {id:3,name:"Smart Phone",price:5000,selected:true},
  ];

  constructor(private http:HttpClient ) { }

  getAllProducts():Observable<any>{
    return this.http.get<any>('http://localhost:8085/products');
  }

  deleteProduct(product:any):Observable<any>{
   return this.http.delete('http://localhost:8085/products/'+product.id);
  }
}
