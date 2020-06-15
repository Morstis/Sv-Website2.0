import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/s/auth.service';
import { LoaderService } from 'src/app/modules/shared/s/loader.service';

@Component({
  selector: 'lw-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.scss'],
})
export class HeaderMobileComponent implements OnInit {
  isLoading$ = this.loaderService.state();

  constructor(
    private auth: AuthService,
    private loaderService: LoaderService
  ) {}

  ngOnInit(): void {}
  logout() {
    this.auth.logout().then(() => {
      console.log('%clogout', 'color: orange');
    });
  }
}
