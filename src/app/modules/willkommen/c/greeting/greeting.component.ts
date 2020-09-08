import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WillkommenService } from '../../willkommen.service';

@Component({
  selector: 'lw-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss'],
})
export class GreetingComponent implements OnInit {
  constructor(private router: Router, private willkommen: WillkommenService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigateByUrl(this.willkommen.currentRoute);
    }, 6000);
  }
}
