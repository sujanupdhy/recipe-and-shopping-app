import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test','https://st4.depositphotos.com/18508348/28349/i/950/depositphotos_283498404-free-stock-photo-home-made-burger-composition-recipe.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test','https://st4.depositphotos.com/18508348/28349/i/950/depositphotos_283498404-free-stock-photo-home-made-burger-composition-recipe.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
