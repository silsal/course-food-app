import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'food-app';
  showRecipe = true;

  goTo(event: string) {
    (event === 'shopping') ? this.showRecipe = false : this.showRecipe = true;
  }
}
