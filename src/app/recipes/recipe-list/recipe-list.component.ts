import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  @Output() showRecipe = new EventEmitter<Recipe> ();


  recipes: Recipe[] = [
    new Recipe('A test Recipies', 'this is simply a test', 'https://outsider.ie/wp-content/uploads/2017/08/pizza-800x600.jpg'),
    new Recipe('A new test Recipies', 'this is simply a test', 'https://outsider.ie/wp-content/uploads/2017/08/pizza-800x600.jpg')  
  ];

  constructor() { }

  ngOnInit() {
  }

  selectedRecipe(recipe: Recipe) {
    this.showRecipe.emit(recipe);
  }

}
