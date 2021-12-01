import { Component, OnInit } from '@angular/core';
import { faChevronRight, faArrowRight, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
})
export class ShopComponent implements OnInit {
  faChevronRight = faChevronRight;
  faArrowRight = faArrowRight;
  faShoppingCart = faShoppingCart;

  constructor() {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
