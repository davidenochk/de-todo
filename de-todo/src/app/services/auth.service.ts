import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { Md5 } from "ts-md5/dist/md5";

import { APP_SETTINGS } from "../config/settings.config";
import { StorageService } from "../services/storage.service";
import { ChttpService } from "../services/chttp.service";
import { IAccount } from "../interfaces/iAccount.interface";
import { AccountService } from "../services/account.service";

@Injectable()
export class AuthService {
  app_settings = APP_SETTINGS;

  constructor(private http: ChttpService,
    private router: Router,
    private storage: StorageService,
    private account: AccountService
  ) { }

  signInUser(account: any): Observable<any> {
    account.password = Md5.hashStr(account.password);
    return this.http.post('user/auth', account)
      .do((response) => {
        let res = response;
        if (res.status == 'success') {
          this.account.isLoggedIn = true;
          this.account.setUser(res.username, res.sessionId);
          this.storage.setUsername(res.username);
          this.storage.setToken(res.sessionId);
          this.router.navigate([this.account.redirectUrl || this.app_settings.app.urlToRedirectAfterLogin]);
        } else if (res.status == 'error') {
          throw ({
            message: res.error
          })
        }
      }, (err) => {
      })
  }

  signOutUser(): void {
    this.http.get(`user/logout?sessionId=${this.account.user.sessionId}`)
      .subscribe((response) => {
        this.resetAccount();
        this.router.navigate([this.app_settings.app.urlToRedirectAfterLogout]);
      }, (err) => {
        this.resetAccount();
        this.router.navigate([this.app_settings.app.urlToRedirectAfterLogout]);
      });
  }

  resetAccount() {
    this.account.isLoggedIn = false;
    this.account.setUser(null, null);
    this.storage.removeUsername();
    this.storage.removeToken();
  }

  redirectToLogin() {
    this.router.navigate(['login']);
  }

}
