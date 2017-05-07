import { Component } from '@angular/core';
import { StorageService } from "./services/storage.service";
import { AccountService } from "./services/account.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private storage: StorageService,
    private account: AccountService,
    private router: Router) {
  }
  ngOnInit() {
    this.account.user.sessionId = this.storage.getToken();
    this.account.user.username = this.storage.getUsername();
    this.account.user.sessionId && this.account.user.username ? this.account.isLoggedIn = true : this.account.isLoggedIn = false;
    if(!this.account.isLoggedIn){
      this.router.navigate(['login']);
    }
  }
  title = 'app works!';
}
