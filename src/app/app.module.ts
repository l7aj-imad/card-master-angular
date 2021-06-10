import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardService } from './service/card.service';
import { RoleService } from './service/role.service';
import { ThemeService } from './service/theme.service';
import { UserService } from './service/user.service';
import { UserComponent } from './user/user.component';
import { ThemeComponent } from './theme/theme.component';
import { RoleComponent } from './role/role.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ThemeComponent,
    RoleComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CardService, UserService, ThemeService, RoleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
