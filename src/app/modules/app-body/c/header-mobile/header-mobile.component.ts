import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/s/auth.service';

@Component({
  selector: 'lw-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.scss'],
})
export class HeaderMobileComponent implements OnInit {
  constructor(private auth: AuthService) {}

  ngOnInit(): void {}
  logout() {
    this.auth.logout().then(() => {
      console.log('%clogout', 'color: orange');
    });
  }
}
