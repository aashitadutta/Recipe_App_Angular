import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'
})
export class RecipeService{
	//recipeSelected = new EventEmitter<Recipe>();
  //recipeSelected = new Subject<Recipe>();
  recipesChanged = new Subject<Recipe[]>();
  private recipes : Recipe[] = [];
	// private recipes : Recipe[] = [
 //   new Recipe('Tasty Salad', 
 //   	'Super tasty salad, Just Awesome!',
 //   	'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--381451_12.jpg?itok=bbI0fd5H',
 //   	[new Ingredient('Coke', 1),
 //   	new Ingredient('French Fries', 20)
 //   	]),
 //   new Recipe('Extra Large Pizza', 
 //   	'Wanna be a Pizza Maniac??',
 //    'https://www.delonghi.com/Global/recipes/multifry/97.jpg',
 //    [new Ingredient('Garlic Bread', 2),
 //   	new Ingredient('Burger', 2)
 //   	])
 
 //  ];

  constructor(private shoppingListService: ShoppingListService){}

  setRecipes(recipes: Recipe[]){
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes(){
  	return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
  	this.shoppingListService.addIngredient(ingredients);
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number){
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());  
  }
}