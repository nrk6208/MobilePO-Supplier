import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { CommonService } from './common.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private _isLoggedIn = new BehaviorSubject<boolean>(false);
    private _loginData = null;
    currentPage = '';
    constructor(private router: Router,
        private commonService: CommonService) {
        if (localStorage.getItem(btoa('isLoggedIn')) == null) {
            this._isLoggedIn.next(false);
            this.logout();
        } else {
            this._isLoggedIn.next(true);
            const _tempLoginData = localStorage.getItem(btoa('loginData'));
            if (_tempLoginData != null) {
                this._loginData = JSON.parse(atob(_tempLoginData));
            }
        }
    }
    isLoggedIn() {
        return this._isLoggedIn.asObservable();
    }
    getLogginStatus() {
        return this._isLoggedIn.value;
    }
    saveLogindata(data: any) {
        this._isLoggedIn.next(true);
        localStorage.setItem(btoa('loginData'), btoa(JSON.stringify(data)));
        this._loginData = data;
        localStorage.setItem(btoa('isLoggedIn'), 'true');
        this.router.navigateByUrl('');
        setTimeout(() => {
            this.commonService.spinner.hide();
            this.commonService.toaster.show(`Welcome ${data.User.FirstName} ${data.User.LastName}`);
        }, 500);
    }
    getUser() {
        return this._loginData.User;
    }
    logout(isFromLogin: boolean = false) {
        if (isFromLogin) {
            this.reset();
            this._isLoggedIn.next(false);
        } else {
            this.commonService.spinner.show();
            this.reset();
            this.router.navigateByUrl('login');
            this._isLoggedIn.next(false);
        }
    }
    reset() {
        localStorage.removeItem(btoa('isLoggedIn'));
        localStorage.removeItem(btoa('AuthorizationToken'));
    }
}
