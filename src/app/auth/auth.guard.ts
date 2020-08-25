import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';

import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root'})
export class AuthGuard implements CanActivate{

	constructor(private authService: AuthService, private router: Router){}

	canActivate(route: ActivatedRouteSnapshot, router: RouterStateSnapshot): boolean | 
	Promise<boolean> | Observable<boolean | UrlTree>{
		return this.authService.user.pipe(
			take(1), //take lates user value and unsubscribe for this guard execution
			map(user => {
			const isAuth = !!user;
			if(isAuth){
				return true;
			}
			return this.router.createUrlTree(['/auth']);
		}),
		// tap(isAuth => { //manually redirecting page to auth if user enters wrong url- causes race conditon
		// 	//if multiple redirect requests come
		// 	if(!isAuth){
		// 		this.router.navigate(['/auth']);
		// 	}
		// })
		); 
	}
}