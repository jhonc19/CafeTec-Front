import { Component, OnInit, ViewChild } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { proveedores } from '../data';

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

  infoWindows = '';
  proveedores = proveedores;
  faChevronRight = faChevronRight;
  center = { lat: -7.1586343, lng: -78.5099531 };
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

  toggleInfoWindow(marker: MapMarker, open: boolean, info: string = 'Mancora') {
    this.infoWindows = info;
    open ? this.infoWindow.open(marker) : this.infoWindow.close(marker);
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
