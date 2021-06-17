import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './component/user/user.component';
import { ThemeComponent } from './component/theme/theme.component';
import { CardComponent } from './component/card/card.component';
import { DatePipe } from '@angular/common';
import { AppComponent } from './app.component';
import { BasicAuthHtppInterceptorService } from './service/basic-auth-htpp-interceptor.service';
import { LoginComponent } from './component/login/login.component';
import { NavComponent } from './component/nav/nav.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ThemeComponent,
    CardComponent,
    LoginComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DatePipe,{provide:HTTP_INTERCEPTORS, useClass:BasicAuthHtppInterceptorService, multi:true} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
