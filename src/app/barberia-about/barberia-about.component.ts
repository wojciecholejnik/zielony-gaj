import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { config } from 'src/assets/config';

@Component({
  selector: 'app-barberia-about',
  templateUrl: './barberia-about.component.html',
  styleUrls: ['./barberia-about.component.scss'],
  providers: [CarouselConfig]

})
export class BarberiaAboutComponent implements OnInit {
  tel: string;
  description1: string;
  description2: string;
  description3: string;

  constructor(private carouselConfing: CarouselConfig) {
    this.tel = config.barberia.phone
    this.description1 = config.barberia.description[0];
    this.description2 = config.barberia.description[1];
    this.description3 = config.barberia.description[2];
   }

  ngOnInit() {
  }
  scrollTop(){
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }

  goToBarberia(){
    window.open(config.barberia.booksyURL, '_blank')
  }
  openFacebook(){
    window.open(config.barberia.facebookURL, '_blank')
  }
  openInsta(){
    window.open(config.barberia.instagramURL, '_blank')
  }

}
