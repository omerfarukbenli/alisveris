import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
 
   employees:Employee[] = [];
   dataLoaded = false; //dönen şey için yazılcak
   //getaldaki url

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
   this.getEmployees();

  }


  //getirme kodu
  getEmployees(){
  this.productService.getEmployees().subscribe(response=>{
    this.employees = response.data
    this.dataLoaded = true;
  })
  }
}
