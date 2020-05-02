import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lw-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  logout() {
    console.log('logout');
  }
}
