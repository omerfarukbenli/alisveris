import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/Models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  departments:Department[] = [];
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getDepartments();
  }

  getDepartments(){
    this.categoryService.getDepartments().subscribe(response=>{
      this.departments = response.data

    })
    }
}
