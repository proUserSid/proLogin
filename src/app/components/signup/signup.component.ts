import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';

  constructor() {}

  ngOnInit(): void {}

  onSignUp(invalid: any): void {
    if (invalid) {
      return;
    }
    console.log({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
    });
  }
}
