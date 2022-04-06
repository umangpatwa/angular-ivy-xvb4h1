import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NgxLiveDemoModule } from 'ngx-live-demo/lib/ngx-live-demo.module';

@NgModule({
  imports: [BrowserModule, FormsModule, NgxLiveDemoModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
