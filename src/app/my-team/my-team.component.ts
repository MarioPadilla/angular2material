import { Component, OnInit} from '@angular/core';
import { Member }        from '../member';
import '../rxjs-operators';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Component({
	selector: 'app-my-team',
	templateUrl: './my-team.component.html',
	styleUrls: ['./my-team.component.css']
})

export class MyTeamComponent implements OnInit {
	
	team: FirebaseObjectObservable<any>;

	constructor(af: AngularFire) {
		this.team = af.database.object('/team/members');
	 }

	ngOnInit() { }

}
