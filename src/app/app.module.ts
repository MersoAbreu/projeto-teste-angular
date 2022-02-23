import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {ToggleButtonModule} from 'primeng/togglebutton';
import { AppComponent } from './app.component';
import {ListboxModule} from 'primeng/listbox';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {OrderListModule} from 'primeng/orderlist';
import { Ng2SearchPipeModule } from "ng2-search-filter";


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    ToggleButtonModule,
    FormsModule,
    ListboxModule,
    HttpClientModule,
    CommonModule,
    OrderListModule,
    Ng2SearchPipeModule,


  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    ToggleButtonModule,
    Ng2SearchPipeModule
  ]
})
export class AppModule { }
