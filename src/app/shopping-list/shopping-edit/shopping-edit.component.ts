import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onSubmit(name: string, amount: number, event: MouseEvent){
    event.preventDefault();
    this.slService.addIngredient(new Ingredient(name, amount));
  }
}
