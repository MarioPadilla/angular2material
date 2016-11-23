import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { MeetupEventListComponent } from './meetup-event-list/meetup-event-list.component';
import { MeetupEventService } from './meetup-event.service';
import { HomeComponent } from './home/home.component';
import { MeetupEventDetailComponent } from './meetup-event-detail/meetup-event-detail.component';
import { GdgLocationComponent } from './gdg-location/gdg-location.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

import { AgmCoreModule } from 'angular2-google-maps/core';
import { MyTeamComponent } from './my-team/my-team.component';
import { MyCommunityComponent } from './my-community/my-community.component';
import { AboutUsComponent } from './about-us/about-us.component';

import { GdgFirebaseService } from './gdg-firebase.service';
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
    apiKey: "AIzaSyAVAV8h9HzgMtyQtz6cZ0u0xSG0TxExoC4",
    authDomain: "gdgmalagacity.firebaseapp.com",
    databaseURL: "https://gdgmalagacity.firebaseio.com",
    storageBucket: "gdgmalagacity.appspot.com",
    messagingSenderId: "579104820497"
};

@NgModule({
  declarations: [
    AppComponent,
    MeetupEventListComponent,
    HomeComponent,
    MeetupEventDetailComponent,
    GdgLocationComponent,
    PageNotFoundComponent,
    MyTeamComponent,
    MyCommunityComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    MaterialModule.forRoot(),
    routing,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAN-BfBPHqCN2h0ekTnGhoyQM4aGkJJqT8'
    }),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [MeetupEventService, GdgFirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
