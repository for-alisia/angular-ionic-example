import { RecipesService } from './recipes.service';
import { IRecipe } from './recipe.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage {
  recipes: IRecipe[];
  constructor(private recipesService: RecipesService) {}

  ionViewWillEnter() {
    this.recipes = this.recipesService.getAllRecipes();
  }
}
