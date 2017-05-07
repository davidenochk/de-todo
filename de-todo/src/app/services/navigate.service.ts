import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

@Injectable()
export class NavigateService {

  constructor(private router: Router) { }

  redirectToLogin() {
    this.router.navigate(['login']);
  }

}
