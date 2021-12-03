import { Component, OnInit } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

type days = {
  name: string;
  sigla: string;
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
})

export class BlogComponent implements OnInit {
  faChevronRight = faChevronRight;

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
    {name: 'Lunes', sigla: 'L'},
    {name: 'Martes', sigla: 'M'},
    {name: 'Miercoles', sigla: 'M'},
    {name: 'Jueves', sigla: 'J'},
    {name: 'Viernes', sigla: 'V'},
    {name: 'Sabado', sigla: 'S'},
    {name: 'Domingo', sigla: 'D'},
  ];

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
    };

    console.log(days);

    return days;
  }
}
