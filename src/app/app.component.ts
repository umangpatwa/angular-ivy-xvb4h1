import { Component, VERSION } from '@angular/core';
import { NgxLiveDemoComponent } from 'ngx-live-demo';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
}
