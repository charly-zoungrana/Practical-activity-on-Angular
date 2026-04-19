import { Component, OnInit } from '@angular/core';
import {ProductService} from '../services/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  products!:Array<any>;

  constructor(private productService:ProductService){};

  ngOnInit() {
    this.getAllProducts()
  }


  handleDeleted(product: any) {
    let v=confirm("Etes vous sure de vouloir supprimer ?");
    if(v){
     this.productService.deleteProduct(product);
     this.getAllProducts();

    }
  }

  private getAllProducts() {
    this.products = this.productService.getAllProducts();
  }
}
