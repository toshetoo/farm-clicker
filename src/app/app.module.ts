import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolsComponent } from './tools/tools.component';
import { ToolComponent } from './tools/tool/tool.component';
import { MoneyComponent } from './money/money.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolsComponent,
    ToolComponent,
    MoneyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
