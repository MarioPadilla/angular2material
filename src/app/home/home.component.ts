import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  infos: FirebaseObjectObservable<any>;

	constructor(af: AngularFire) {
		this.infos = af.database.object('/team/infos');
	}

  ngOnInit() {
  }

  

}
