import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/s/auth.service';

@Component({
  selector: 'lw-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private auth: AuthService) {}

  ngOnInit(): void {}
  logout() {
    this.auth.logout().then(() => {
      console.log('%clogout', 'color: orange');
    });
  }
}
