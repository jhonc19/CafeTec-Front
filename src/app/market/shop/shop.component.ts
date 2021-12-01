import { Component, OnInit } from '@angular/core';
import { faChevronRight, faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
})
export class ShopComponent implements OnInit {
  faChevronRight = faChevronRight;
  faArrowRight = faArrowRight;

  constructor() {}

  ngOnInit(): void {}
}
