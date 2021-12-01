import { Component, OnInit } from '@angular/core';
import { faShoppingCart, faEye, faCommentDots } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faShoppingCart = faShoppingCart;
  faEye = faEye;
  faCommentDots = faCommentDots;

  constructor() { }

  ngOnInit(): void {
  }

}
