import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './_components/header/header.component';
import { SharedModule } from './shared/shared.module';
import { HeaderMobileComponent } from './_components/header-mobile/header-mobile.component';
import { LoginComponent } from './_templates/login/login.component';
import { CookieService } from 'ngx-cookie-service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './_interceptors/auth-interceptor.service';
import { GlobalErrorHandler } from './_classes/global-error-handler';
import { RegisterComponent } from './_templates/register/register.component';
import { KlasseValidationDirective } from './_directives/validation/klasse-validation.directive';
import { EmailValidationDirective } from './_directives/validation/email-validation.directive';
import { VerifyComponent } from './_templates/verify/verify.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderMobileComponent,
    LoginComponent,
    RegisterComponent,
    KlasseValidationDirective,
    EmailValidationDirective,
    VerifyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },

    { provide: ErrorHandler, useClass: GlobalErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
