import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() clickedRecipe = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(0, 'Spaghetti chicken meatballs', 'garlic herb spaghetti chicken meatballs', 'https://pinchofyum.com/wp-content/uploads/Garlic-Herb-Spaghetti-and-Meatballs-Feature-1.jpg'),
    new Recipe(1, 'Spaghetti bolognese', 'miam miam', 'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/easy_spaghetti_bolognese_93639_16x9.jpg'),
    new Recipe(2, 'Spaghetti carbonara', 'Best in town', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRsyqrhVFJ1LNGM7AQ-yr-Ubz_YgvWI4QFU7Q&usqp=CAU')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onClickedRecipe(id: number){
    this.clickedRecipe.emit(this.recipes[id]);
  }
}
