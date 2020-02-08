import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/_services/auth.service';
import { LoginData } from 'src/app/_interfaces/login-data';

@Component({
  selector: 'mors-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthService) {}

  login(formValue: LoginData) {
    this.auth.login(formValue).subscribe(res => {
      if (res.res) {
        this.auth.setJWT(res.token);
        window.location.href = '/'; // Realod to get JWT ready
      }
    });
  }

  ngOnInit() {}
}
