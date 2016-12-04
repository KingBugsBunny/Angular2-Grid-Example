import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RestService } from "./services/rest.service";

import { OrderByPipe } from './pipes/order-by.pipe';
import { SearchPipe } from './pipes/search.pipe';

import { ContainerComponent } from './container/container.component';
import { TableComponent } from './container/table/table.component';
import { SortFormComponent } from './container/sort-form/sort-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    SortFormComponent,
    OrderByPipe,
    ContainerComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
