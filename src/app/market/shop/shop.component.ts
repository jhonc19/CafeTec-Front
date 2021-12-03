import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { proveedores } from '../data';
import { Proveedor } from '../models';
import {
  faChevronRight,
  faArrowRight,
  faShoppingCart,
  faMapMarkedAlt,
} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
})
export class ShopComponent implements OnInit {
  @ViewChild('modalTop') modalTop: any;
  @ViewChild(MapInfoWindow) infoWindow: any;

  infoWindows = '';
  descriptionWindows = '';
  proveedores = proveedores;
  center = { lat: -10.001013514381757, lng: -75.64504286969851 };
  options: google.maps.MapOptions = {
    streetViewControl: false,
    disableDefaultUI: true,
  };

  faChevronRight = faChevronRight;
  faArrowRight = faArrowRight;
  faShoppingCart = faShoppingCart;
  faMapMarkedAlt = faMapMarkedAlt;

  showModal = false;

  constructor(private route: Router) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  toggleInfoWindow(marker: MapMarker, open: boolean, proveedor: Proveedor) {
    this.infoWindows = proveedor.enterprise;
    this.descriptionWindows = proveedor.description;
    open ? this.infoWindow.open(marker) : this.infoWindow.close(marker);
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

  openProveedor(idProv: number) {
    this.route.navigate([`proveedor/${idProv}`]);
  }
}
