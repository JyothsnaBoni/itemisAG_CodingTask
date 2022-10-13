import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { MatTableModule } from '@angular/material/table'  
import { MatIconModule } from '@angular/material/icon'
import { MatSelectModule } from '@angular/material/select';
import {NgxPrintModule} from 'ngx-print';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasketComponent } from './components/basket/basket.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrintComponent } from './components/print/print.component';

@NgModule({
  declarations: [
    AppComponent,
    BasketComponent,
    PrintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatSelectModule,
    NgxPrintModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
