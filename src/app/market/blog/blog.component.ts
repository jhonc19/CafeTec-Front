import { Component, OnInit, ViewChild } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { MapInfoWindow} from '@angular/google-maps';

type days = {
  name: string;
  sigla: string;
};

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
})
export class BlogComponent implements OnInit {
  @ViewChild(MapInfoWindow) infoWindow: any;

  faChevronRight = faChevronRight;
  center = { lat: -10.001013514381757, lng: -75.64504286969851 };
  options: google.maps.MapOptions = {
    streetViewControl: false,
    disableDefaultUI: true,
  };
  // optionsMarket: google.maps.MarkerOptions = { icon: '☕️' };

  markerPositions: google.maps.LatLngLiteral[] = [];

  // addMarker(event: google.maps.MapMouseEvent) {
  //   this.markerPositions.push(event.latLng!.toJSON());
  // }

  categories: string[] = [
    '100% Arabica',
    'Aroma Bar',
    'Coffee aroma',
    'Coffee market',
    'Coffee shop',
    'Columbian Coffee',
    'Espresso',
  ];

  days: days[] = [
    { name: 'Domingo', sigla: 'D' },
    { name: 'Lunes', sigla: 'L' },
    { name: 'Martes', sigla: 'M' },
    { name: 'Miercoles', sigla: 'M' },
    { name: 'Jueves', sigla: 'J' },
    { name: 'Viernes', sigla: 'V' },
    { name: 'Sabado', sigla: 'S' },
  ];

  weeks = 0;

  constructor() {}

  ngOnInit(): void {
    this.getDaysByMonth(12, 2021);
  }

  getDaysByMonth(month: number, year: number) {
    let date = new Date(year, month - 1, 1);
    console.log(date, 'Date');
    let days = [];

    while (date.getMonth() === month - 1) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }

    days[0].getDay() === 0 && month - 1 === 2
      ? (this.weeks = 4)
      : (this.weeks = 5);

    console.log(days);

    return days;
  }
}
