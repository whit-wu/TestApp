import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestCompComponent } from './test-comp/test-comp.component';
import { TestSrvcService } from './test-comp/services/test-srvc.service';

@NgModule({
  declarations: [
    AppComponent,
    TestCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TestSrvcService],
  bootstrap: [AppComponent]
})
export class AppModule { }
