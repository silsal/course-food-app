import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {


  ingredients: Ingredient[] = [];

  constructor() { }

  ngOnInit() {

  }

  AddIngredientToList(ingredient: Ingredient) {
    this.ingredients.push( ingredient);
  }

}
