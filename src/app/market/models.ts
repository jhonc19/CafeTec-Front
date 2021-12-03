export interface Proveedor {
  id: number;
  first_name: string;
  last_name: string;
  enterprise: string;
  description: string;
  email: string;
  gender: string;
  ubication: google.maps.LatLngLiteral;
}
