import { EventEmitter, Injectable } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChange = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [];

  constructor() { }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChange.emit(this.getIngredients())
  }

  addIngredients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientsChange.emit(this.getIngredients())
  }

  getIngredients(){
    return this.ingredients.slice();
  }
}
