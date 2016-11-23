/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GdgFirebaseService } from './gdg-firebase.service';

describe('Service: GdgFirebase', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GdgFirebaseService]
    });
  });

  it('should ...', inject([GdgFirebaseService], (service: GdgFirebaseService) => {
    expect(service).toBeTruthy();
  }));
});
