import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { Md5 } from "ts-md5/dist/md5";

import { APP_SETTINGS } from "../config/settings.config";
import { StorageService } from "../services/storage.service";
import { ChttpService } from "../services/chttp.service";
import { IAccount } from "../interfaces/iAccount.interface";

@Injectable()
export class AccountService {
  user: IAccount = {
    username: null,
    role: null,
    sessionId: null
  };
  isLoggedIn: boolean = false;
  redirectUrl: string = '';

  constructor(private http: ChttpService,
    private router: Router,
    private storage: StorageService
  ) { }

  getUser() {
    return this.user;
  }

  setUser(username, sessionId) {
    this.user.username = username;
    this.user.sessionId = sessionId;
  }

  redirectToLogin() {
    this.router.navigate(['login']);
  }

}
