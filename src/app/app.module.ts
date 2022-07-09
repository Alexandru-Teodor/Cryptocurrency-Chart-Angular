import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyChartComponent } from './Components/my-chart/my-chart.component';
import { DropdownMenuComponent } from './Components/dropdown-menu/dropdown-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MyChartComponent,
    DropdownMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
