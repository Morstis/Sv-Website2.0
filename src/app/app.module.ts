import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { GreetingModule } from './modules/willkommen/c/greeting/greeting.module';
import { AppBodyModule } from './modules/app-body/app-body.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedModule, AppBodyModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
