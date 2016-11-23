import { Component, OnInit } 	from '@angular/core';
import { MeetupEventService }	from '../meetup-event.service';

@Component({
  selector: 'app-my-community',
  templateUrl: './my-community.component.html',
  styleUrls: ['./my-community.component.css']
})
export class MyCommunityComponent implements OnInit {
	errorMessage: string; 
	meetupGroups: any[];
	isover: boolean = true;

	constructor (private service: MeetupEventService) {}
	
	ngOnInit() {
		this.getMeetupSimilarGroups();
	}

	getMeetupSimilarGroups(){
		this.service.getSimilarGroups().subscribe(
		meetupGroups => this.meetupGroups = meetupGroups,
		error => this.errorMessage = <any>error);
	}

	over(){
		console.log("variable", this.isover);
		console.log(event);
		this.isover = !this.isover;
	}

}
