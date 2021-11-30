import { Component, OnInit } from '@angular/core';
import { faShoppingCart, faEye, faCommentDots, faChevronRight, faMapMarkerAlt ,faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faShoppingCart = faShoppingCart;
  faEye = faEye;
  faCommentDots = faCommentDots;
  faChevronRight = faChevronRight;
  faMapMarkerAlt = faMapMarkerAlt;
  faPhoneAlt = faPhoneAlt;
  faEnvelope = faEnvelope;

  constructor() { }

  ngOnInit(): void {
  }

}
