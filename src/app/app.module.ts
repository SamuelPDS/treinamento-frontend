import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './components/form/form.component';
import { NgxMaskModule } from 'ngx-mask';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchClientComponent } from './components/search-client/search-client.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    SearchClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [NgxMaskModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
