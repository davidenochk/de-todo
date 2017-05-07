import { Component, OnInit } from '@angular/core';
import { APP_SETTINGS } from "../../config/settings.config";
import { AccountService, AuthService } from "../../services";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  appTitle: string = APP_SETTINGS.app.title;
  constructor(public auth: AuthService, private account: AccountService) { }

  ngOnInit() {
  }

  onClickSignOut() {
    this.auth.signOutUser();
  }

}
