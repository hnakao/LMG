import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { TooltipModule } from 'ngx-bootstrap/tooltip';


// Services

import { MonthService } from './services/month.service';
import { MessageService } from './services/message.service';


//* ########################################## */

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { MonthComponent } from './components/month/month.component';
import { LeftComponent } from './components/shared/left/left.component';
import { RightComponent } from './components/right/right.component';
import { MessageItemComponent } from './components/message-item/message-item.component';
import { TabsHeaderComponent } from './components/shared/tabs-header/tabs-header.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MonthComponent,
    LeftComponent,
    RightComponent,
    MessageItemComponent,
    TabsHeaderComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    TooltipModule.forRoot()
  ],
  providers: [
    MonthService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
