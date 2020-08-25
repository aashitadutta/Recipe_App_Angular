import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
//import { AuthComponent } from './auth/auth.component';
//import { ShoppingListComponent } from './shopping-list/shopping-list.component';
// import { RecipesComponent } from './recipes/recipes.component';
// import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
// import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
// import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
// import { RecipesResolverService } from './recipes/recipes-resolver.service';
// import { AuthGuard } from './auth/auth.guard';

const appRoutes: Routes= [
	{ path:'', redirectTo: '/recipes', pathMatch: 'full'},
	//{ path:'recipes', loadChildren: './recipes/recipes.module#RecipesModule' } //lazy loading ...no need to load component here
	//other way for lazy loading
	{ 
		path: 'recipes',
		loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesModule)
	},

	{ 
		path: 'shopping-list',
		loadChildren: './shopping-list/shopping-list.module#ShoppingListModule'
	},

	{ 
		path: 'auth',
		loadChildren: './auth/auth.module#AuthModule'
	}

	//{ path: 'auth', component: AuthComponent },// moved to auth module
	];
@NgModule({
	imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
	exports: [RouterModule]
})
export class AppRoutingModule {

}