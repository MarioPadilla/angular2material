import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gdg-location',
  templateUrl: './gdg-location.component.html',
  styleUrls: ['./gdg-location.component.css']
})

export class GdgLocationComponent implements OnInit {

	title: string = 'GDG Málaga Happy Office';
    lat: number = 36.715004;
    lng: number = -4.477976;

	navbar_height: number = 64;
	height: number = window.innerHeight - this.navbar_height;

	onResize(event) {
 		this.height = event.target.innerHeight - this.navbar_height;
	}

  	constructor() { }

  	ngOnInit() {
  	}

}
