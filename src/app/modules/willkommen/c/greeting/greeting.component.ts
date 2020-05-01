import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lw-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss'],
})
export class GreetingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  continue() {
    console.log(true);
  }
}
