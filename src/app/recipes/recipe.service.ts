import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import {Recipe} from './recipe.model'

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      0, 
      'Spaghetti chicken meatballs', 
      'garlic herb spaghetti chicken meatballs', 
      'https://pinchofyum.com/wp-content/uploads/Garlic-Herb-Spaghetti-and-Meatballs-Feature-1.jpg',
      [ 
        new Ingredient('Chicken', 2),
        new Ingredient('Spaghetti',10),
        new Ingredient('Tomato',2)
      ]),
    new Recipe(
      1, 
      'Spaghetti bolognese', 
      'miam miam', 'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/easy_spaghetti_bolognese_93639_16x9.jpg',
      [ 
        new Ingredient('Meat', 2),
        new Ingredient('Spaghetti',10),
        new Ingredient('Tomato',2)
      ]),
    new Recipe(
      2, 
      'Spaghetti carbonara', 
      'Best in town', 
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRsyqrhVFJ1LNGM7AQ-yr-Ubz_YgvWI4QFU7Q&usqp=CAU',
      [ 
        new Ingredient('Bacon', 2),
        new Ingredient('Spaghetti',10),
        new Ingredient('Parmesan',2)
      ])
  ]
  constructor(private slSrevice: ShoppingListService) { }

  getRecipes(){
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slSrevice.addIngredients(ingredients);
  }
}
