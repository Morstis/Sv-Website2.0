import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'lw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Sv-Website';

  constructor(@Inject(DOCUMENT) private document: Document) {}
  ngOnInit(): void {
    // this.document.body.classList.add('theme-alternate');
  }
}
