import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketRoutingModule } from './market-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './shared/footer/footer.component';
import { ShopComponent } from './shop/shop.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ShopComponent,
    ContactComponent,
    BlogComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MarketRoutingModule
  ]
})
export class MarketModule { }
