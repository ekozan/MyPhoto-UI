import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule }    from '@angular/common/http';


import { AppRouterModule }     from './app-router.module';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { TripsService } from './trips.service';


@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRouterModule ],
  declarations: [ AppComponent, HelloComponent, DashboardComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ TripsService ]
})
export class AppModule { }
