import { Component, OnInit } from '@angular/core';
import { faChevronRight, faPhoneAlt, faMapMarkerAlt  } from '@fortawesome/free-solid-svg-icons';
import {  faFacebookSquare, faTwitter, faYoutubeSquare, faInstagram, faSkype} from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  
})
export class ContactComponent implements OnInit {
  
  faChevronRight = faChevronRight;
  faPhoneAlt  = faPhoneAlt ;
  faMapMarkerAlt=faMapMarkerAlt;
  faFacebookSquare=faFacebookSquare;
  faTwitter = faTwitter;
  faYoutubeSquare=faYoutubeSquare;
  faInstagram=faInstagram;
  faSkype=faSkype;

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0)
  }
}
