import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';
import { IAccount } from '../interfaces/iAccount.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  account: IAccount = {
    username: null,
    password: null
  }
  error: any = '';

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.resetAccount();
  }

  onSubmit({ value, valid }: { value: IAccount, valid: boolean }) {
    if (valid) {
      this.authService.signInUser(value)
        .subscribe((response) => {
          //todo: After logged in
        }, (err) => {
          this.error = err;
        })
    }
  }
}
