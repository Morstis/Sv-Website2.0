import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lw-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.scss'],
})
export class HeaderMobileComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  logout() {
    console.log('logout');
  }
}
