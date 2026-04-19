import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  products!:Array<any>;

  constructor(){};

  ngOnInit() {
  }


  handleDeleted(product: any) {
    let v=confirm("Etes vous sure de vouloir supprimer ?");
    if(v){
      this.products=this.products.filter(p=>p.id!=product.id);
    }
  }
}
