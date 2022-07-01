import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityListComponent } from './components/city-list/city-list.component';
import { WeatherMainComponent } from './components/weather-main/weather-main.component';

@NgModule({
  declarations: [
    AppComponent,
    CityListComponent,
    WeatherMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
