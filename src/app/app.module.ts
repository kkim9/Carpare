import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import{ AddCarComponent } from './cars/add-car/add-car.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/Icon';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { DataService } from './data.service';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AddCarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    FlexLayoutModule,
    MatToolbarModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule,
    HttpClientJsonpModule

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
