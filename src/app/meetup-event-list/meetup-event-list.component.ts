import { Component, OnInit }  from '@angular/core';
import '../rxjs-operators';
import { MeetupEvent }        from '../meetup-event';
import { MeetupEventService }        from '../meetup-event.service';
import { MeetupGroup }        from '../meetup-group';

@Component({
  selector: 'app-meetup-event-list',
  templateUrl: './meetup-event-list.component.html',
  styleUrls: ['./meetup-event-list.component.css']
})
export class MeetupEventListComponent implements OnInit {

  errorMessage: string;
  meetupEvents: MeetupEvent[];
  mode = 'Observable';
  meetupGroup: MeetupGroup = new MeetupGroup();
  loading: boolean = true;

  constructor (private service: MeetupEventService) {}
  
  ngOnInit() {
    this.getMeetupEvents();
    this.getMeetupGroup();
  }

  getMeetupEvents() {
    this.service.getEvents().subscribe(
      meetupEvents => this.meetupEvents = meetupEvents,
      error =>  this.errorMessage = <any>error);
      this.loading = false;
  }

  getMeetupGroup(){
    this.service.getGroup().subscribe(
      meetupGroup => this.meetupGroup = meetupGroup,
      error => this.errorMessage = <any>error);
  }
}
