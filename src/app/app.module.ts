import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { WeatherModule } from './weather/weather.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule, WeatherModule, SharedModule, AppRoutingModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
})
export class AppModule {}
