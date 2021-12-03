import { Component, OnInit } from '@angular/core';
import { faChevronRight, faPhoneAlt, faFax } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  
})
export class ContactComponent implements OnInit {
  
  faChevronRight = faChevronRight;
  faPhoneAlt  = faPhoneAlt ;
  faFax = faFax;
  

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0)
  }
}
