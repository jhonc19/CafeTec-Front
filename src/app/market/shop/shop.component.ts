import { Component, OnInit, ViewChild } from '@angular/core';
import {
  faChevronRight,
  faArrowRight,
  faShoppingCart,
  faMapMarkedAlt,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
})
export class ShopComponent implements OnInit {
  @ViewChild('modalTop') modalTop: any;

  faChevronRight = faChevronRight;
  faArrowRight = faArrowRight;
  faShoppingCart = faShoppingCart;
  faMapMarkedAlt = faMapMarkedAlt;

  showModal = false;

  constructor() {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  toggleModal() {
    this.showModal = !this.showModal;

    if (this.showModal) {
      setTimeout(() => {
        console.log(window, 'Top');
        let el = this.modalTop.nativeElement;
        el.setAttribute('style', 'top: ' + window.scrollY + 'px;');
        console.log(this.modalTop, 'Modal Top');
      }, 500);
    }
  }
}
