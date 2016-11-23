import { Component } from '@angular/core';
import './rxjs-operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mobile: boolean = window.innerWidth < 768;
  
  onResize(event) {
 		this.mobile = window.innerWidth < 768;
	}

}
