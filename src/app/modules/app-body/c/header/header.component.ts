import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/s/auth.service';
import { LoaderService } from 'src/app/modules/shared/s/loader.service';

@Component({
  selector: 'lw-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isLoading$ = this.loaderService.state();

  constructor(
    private auth: AuthService,
    private loaderService: LoaderService
  ) {}

  logout() {
    this.auth.logout().then(() => {
      console.log('%clogout', 'color: orange');
    });
  }
}
