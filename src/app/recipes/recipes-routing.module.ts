import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { AuthGuard } from '../auth/auth.guard';
import { RecipesResolverService } from './recipes-resolver.service';

const routes: Routes = [
	{ 
		path:'', component: RecipesComponent, 
		canActivate: [AuthGuard],
		children: [
			{ path:'', component: RecipeStartComponent },
			{ path: 'new', component: RecipeEditComponent },
			{ path:':id', component: RecipeDetailsComponent,resolve: [RecipesResolverService] },
			{ path: ':id/edit', component: RecipeEditComponent, resolve: [RecipesResolverService] }
		]
	},
]

@NgModule({
	imports:[ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class RecipesRoutingModule{}