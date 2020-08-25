//import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService{
	//ingredientsChanged = new EventEmitter<Ingredient[]>();
	ingredientsChanged = new Subject<Ingredient[]>(); //other way of event emitter
    startedEditing = new Subject<number>();
	private ingredients : Ingredient[] = [
	new Ingredient('Apples', 5), 
	new Ingredient('Tomatoes', 15),
	];

	getIngredients(){
		return this.ingredients.slice();
	}

	getIngredient(index: number){
		return this.ingredients[index];
	}

	addIngredients(ingredient: Ingredient){
		this.ingredients.push(ingredient);
		//this.ingredientsChanged.emit(this.ingredients.slice());
		this.ingredientsChanged.next(this.ingredients.slice());
	}

	addIngredient(ingredients:Ingredient[]){
		// for(let ingredient of ingredients){
		// 	this.addIngredient(ingredient);
		// }
		this.ingredients.push(...ingredients);
		this.ingredientsChanged.next(this.ingredients.slice());
		//this.ingredientsChanged.emit(this.ingredients.slice());
	}

	updateIngredient(index: number, newIngredient: Ingredient){
		this.ingredients[index] = newIngredient;
		this.ingredientsChanged.next(this.ingredients.slice());
	}

	deleteIngredient(index: number){
		this.ingredients.splice(index, 1);
		this.ingredientsChanged.next(this.ingredients.slice());
	}
}