import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeDetails: Recipe;
  @Output() chosenRecipe = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  selectedRecipe() {
    this.chosenRecipe.emit();
  }

}
