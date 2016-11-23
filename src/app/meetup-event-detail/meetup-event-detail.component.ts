import { Component, OnInit } from '@angular/core';
import '../rxjs-operators';
import { ActivatedRoute, Params } from '@angular/router';
import { MeetupEventService }        from '../meetup-event.service';
import { MeetupEvent }        from '../meetup-event';
import { MeetupGroup }        from '../meetup-group';

@Component({
  selector: 'app-meetup-event-detail',
  templateUrl: './meetup-event-detail.component.html',
  styleUrls: ['./meetup-event-detail.component.css']
})

export class MeetupEventDetailComponent implements OnInit {
  
  errorMessage: string;
  meetupEvent: MeetupEvent = new MeetupEvent();
  meetupGroup: MeetupGroup = new MeetupGroup();

  constructor(private route: ActivatedRoute,
  private service: MeetupEventService) { }

  ngOnInit() {
    this.getMeetupGroup();
    this.route.params.forEach((params: Params) => {
      // (+) converts string 'id' to a number
      let id = +this.route.snapshot.params['id'];
      console.log("id", id);
      this.getMeetupEvent(id);
    });
  }

  getMeetupEvent(id){
     this.service.getEvent(id)
                    .subscribe(
                       meetupEvent => this.meetupEvent = meetupEvent,
                       error =>  this.errorMessage = <any>error);
  }

  getMeetupGroup(){
    this.service.getGroup().subscribe(
      meetupGroup => this.meetupGroup = meetupGroup,
      error => this.errorMessage = <any>error);
  }

}
