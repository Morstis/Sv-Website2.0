import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'lw-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor() {}
  @ViewChild('registerForm') registerForm: NgForm;

  ngOnInit(): void {}

  register(value) {
    console.log(value);
  }
}
