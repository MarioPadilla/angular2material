// ====== ./app/app.routes.ts ======

// Imports
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeetupEventListComponent } from './meetup-event-list/meetup-event-list.component';
import { HomeComponent } from './home/home.component'
import { MeetupEventDetailComponent } from './meetup-event-detail/meetup-event-detail.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { GdgLocationComponent } from './gdg-location/gdg-location.component';
import { MyTeamComponent } from './my-team/my-team.component';
import { MyCommunityComponent } from './my-community/my-community.component';
import { AboutUsComponent } from './about-us/about-us.component';

// Route Configuration
export const routes: Routes = [
    { path: '', component: HomeComponent},
    { 
        path: 'meeting/:id', 
        component: MeetupEventDetailComponent },
    {
        path: 'meetings',
        component: MeetupEventListComponent,
        data: {
            title: 'Meetup Events List'
        }
    },
    {
        path: 'location',
        component: GdgLocationComponent,
        data: {
            title: 'GDG - Location'
        }
    },
    {
        path: 'team',
        component: MyTeamComponent,
        data: {
            title: 'GDG Team'
        }
    },
    {
        path: 'community',
        component: MyCommunityComponent,
        data: {
            title: 'GDG Community'
        }
    },
    {
        path: 'about-us',
        component: AboutUsComponent,
        data: {
            title: 'GDG - About Us'
        }
    },
    { path: '**', component: PageNotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);