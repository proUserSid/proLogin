import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor() {}

  ngOnInit(): void {}

  onLogin(invalid: any): void {
    if (invalid) {
      return;
    }
    console.log({ email: this.email, password: this.password });
  }
}
