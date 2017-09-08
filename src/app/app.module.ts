import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ROUTER_CONFIG } from './app.root';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HelloComponent } from './hello/hello.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { SpeakService } from './share/speak.service';

import {LoginDirective} from './login/login.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HelloComponent,
    LoginDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTER_CONFIG),
    HttpModule,
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    SpeakService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
