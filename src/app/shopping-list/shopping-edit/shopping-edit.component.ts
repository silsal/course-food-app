import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', {static: false}) input: ElementRef;
  @ViewChild('amountInput', {static: false}) amount: ElementRef;
  @Output() ingridientAdded: EventEmitter<Ingredient> = new EventEmitter();

  ingredient: Ingredient;

  constructor() { }

  ngOnInit() {
  }

  addIngredients(): void {
    const name = this.input.nativeElement.value;
    const amount = this.amount.nativeElement.value;
    this.ingredient = {name , amount};

    this.ingridientAdded.emit(this.ingredient);
  }

}
