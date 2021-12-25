import { Injectable } from '@angular/core';
import { IRecipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private recipes: IRecipe[] = [
    {
      id: 'a1',
      title: 'Apple Pie',
      ingredients: ['apples', 'flour', 'sugar', 'eggs', 'butter'],
      imageUrl:
        // eslint-disable-next-line max-len
        'https://images.unsplash.com/photo-1601000938259-9e92002320b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: 'a2',
      title: 'Fitness Salad',
      ingredients: [
        'tomatoes',
        'cottage cheese',
        'salad',
        'broccoli',
        'lemon',
        'olive oil',
      ],
      imageUrl:
        // eslint-disable-next-line max-len
        'https://images.unsplash.com/photo-1594916107106-4837e3ed0e6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    },
  ];
  constructor() {}

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return { ...this.recipes.find(({ id }) => id === recipeId) };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(({ id }) => id !== recipeId);
  }
}
