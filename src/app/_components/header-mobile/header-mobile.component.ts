import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mors-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.scss']
})
export class HeaderMobileComponent implements OnInit {
  constructor() {}
  list = ['home', 'test2'];
  open = false;
  ngOnInit() {}
}
