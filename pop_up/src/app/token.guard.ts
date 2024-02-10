import { Injectable, inject } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { LogniRegisterService } from './logni-register.service';

@Injectable({
    providedIn: 'root'
})
export class TokenGuard implements CanActivate {
    loginCheck = inject (LogniRegisterService)
    canActivate(): boolean {
        return this.loginCheck.isLogin
    }
}
