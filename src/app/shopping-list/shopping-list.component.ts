import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
	ingredients : Ingredient[];
  private subscription: Subscription;
// ingredients : Ingredient[] = [
// new Ingredient('Apples', 5),
// new Ingredient('Tomatoes', 15),
// ];
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  	this.ingredients = this.shoppingListService.getIngredients();
  	this.subscription = this.shoppingListService.ingredientsChanged.subscribe((ingredient: Ingredient[])=> { 
  	   this.ingredients = ingredient;
  	});
  }
  // onIngredientAdded(ingredient:Ingredient){
  // 	//this.ingredients.push(ingredient);
  // }
  
  onEditItem(index: number){
      this.shoppingListService.startedEditing.next(index);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
