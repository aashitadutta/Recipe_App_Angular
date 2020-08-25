import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  //@Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipe: Recipe[];
  subscription : Subscription;
  // recipes : Recipe[] = [
  //  new Recipe('A Test Recipe', 'This is simply a test',
  //  	'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--381451_12.jpg?itok=bbI0fd5H'),
  //  new Recipe('Another Test Recipe', 'This is simply a test',
  //    'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--381451_12.jpg?itok=bbI0fd5H')
 
  // ];
  constructor(private recipeService : RecipeService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription= this.recipeService.recipesChanged.subscribe((recipes: Recipe[]) => {
      this.recipe = recipes;
    });
    this.recipe = this.recipeService.getRecipes();
  }
  // onRecipeSelected(recipe:Recipe){
  //   this.recipeWasSelected.emit(recipe);
  // }
  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
