/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MeetupEventService } from './meetup-event.service';

describe('Service: MeetupEvent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MeetupEventService]
    });
  });

  it('should ...', inject([MeetupEventService], (service: MeetupEventService) => {
    expect(service).toBeTruthy();
  }));
});
