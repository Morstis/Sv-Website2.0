import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Enriroment
import { environment } from 'src/environments/environment';

// Firebase
import { AngularFireModule } from '@angular/fire';
import 'firebase/app';
import 'firebase/database';

// App modules
import { SharedModule } from './modules/shared/shared.module';
import { AppBodyModule } from './modules/app-body/app-body.module';
import { WillkommenModule } from './modules/willkommen/willkommen.module';
import { AuthModule } from './modules/auth/auth.module';
import { NachhilfeModule } from './modules/nachhilfe/nachhilfe.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),

    SharedModule,
    AppBodyModule,
    WillkommenModule,
    AuthModule,
    NachhilfeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
