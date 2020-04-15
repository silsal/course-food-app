import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  recipeToShow: Recipe = undefined;

  constructor() { }

  ngOnInit() {
  }

  displayRecipe(recipe: Recipe) {
    this.recipeToShow = recipe;
  }

}
