import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test Recipies', 'this is simply a test', 'https://outsider.ie/wp-content/uploads/2017/08/pizza-800x600.jpg') 
  ];

  constructor() { }

  ngOnInit() {
  }

}
