import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSlected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('First Test Recipe', 'This is your first test','https://st4.depositphotos.com/18508348/28349/i/950/depositphotos_283498404-free-stock-photo-home-made-burger-composition-recipe.jpg'),
    new Recipe('Second Test Recipe', 'This is your second test','https://st4.depositphotos.com/18508348/28349/i/950/depositphotos_283498404-free-stock-photo-home-made-burger-composition-recipe.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSlected.emit(recipe);
  }
}
