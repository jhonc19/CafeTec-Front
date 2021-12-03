import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { proveedores } from '../data';
import { Proveedor } from '../models';
import { MapMarker, MapInfoWindow } from '@angular/google-maps';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
})
export class SupplierComponent implements OnInit {
  @ViewChild(MapInfoWindow) infoWindow: any;

  faShoppingCart = faShoppingCart;

  proveedor = {} as Proveedor;

  center = { lat: -10.001013514381757, lng: -75.64504286969851 };
  options: google.maps.MapOptions = {
    streetViewControl: false,
    disableDefaultUI: true,
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);

    this.route.params.subscribe(({ id }) => {
      this.proveedor = proveedores.find((prov) => (prov.id == id))!;
      this.center = this.proveedor.ubication;
      console.log(this.proveedor, id, 'proveedor');
    });
  }

  toggleInfoWindow(marker: MapMarker, open: boolean, proveedor: Proveedor) {
    open ? this.infoWindow.open(marker) : this.infoWindow.close(marker);
  }
}
