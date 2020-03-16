import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ToastrModule } from 'ngx-toastr';
import { ContactsComponent } from './contacts/contacts.component';
import { StatusComponent } from './status/status.component';
import { AllMaterialModule } from './weather/all-material.module';
import { HttpClientModule } from '@angular/common/http';
import { CurrLocationComponent } from './weather/current/curr-location.component';
import { CommonModule } from '@angular/common';
import { HourlyComoponent } from './weather/current/hourly/hourly.component';
import { TinyComponent } from './weather/widget/tiny.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    StatusComponent,
    CurrLocationComponent,
    HourlyComoponent,
    TinyComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 20
    }),
    ToastrModule.forRoot({
      closeButton: true,
      preventDuplicates: true
    }),
    AllMaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
