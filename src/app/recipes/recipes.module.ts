import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
//import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RecipesComponent } from './recipes.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipesRoutingModule } from './recipes-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
	declarations: [
	RecipesComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeItemComponent,
    RecipeStartComponent,
    RecipeEditComponent,
    ],
//Componenets, Directives and pipes are to be imported to use except services which once declared in appmodule
    imports:[RouterModule, 
    //CommonModule,  //commom module to use NgFor or NgIf
    ReactiveFormsModule,
    RecipesRoutingModule,
    SharedModule
    ], 
    // exports: [ //no need to export as we are using internally via recipe routing module, 
                  //not further used by app routing module
    // RecipesComponent,
    // RecipeListComponent,
    // RecipeDetailsComponent,
    // RecipeItemComponent,
    // RecipeStartComponent,
    // RecipeEditComponent,
    // ]
})
export class RecipesModule{

}