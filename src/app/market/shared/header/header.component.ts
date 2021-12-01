import { Component, OnInit } from '@angular/core';
import { faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  faShoppingCart = faShoppingCart;
  faBars = faBars;

  showMenu = false;

  constructor() {}

  ngOnInit(): void {}

  toggleMenu() {
    console.log('Se Ejecuto el metodo toggleMenu');
    this.showMenu = !this.showMenu;
  }
}
