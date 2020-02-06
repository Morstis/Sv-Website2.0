import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'mors-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private http: HttpClient) {}

  login(formValue) {
    console.log(formValue);
    this.http
      .post<Response>('http://localhost:3000' + '/auth/login', formValue)
      .subscribe(res => {
        console.log(res);
      });
  }

  ngOnInit() {}
}
