import { Component, OnInit } from '@angular/core';
import { config } from 'src/assets/config';

@Component({
  selector: 'app-barberia-about',
  templateUrl: './barberia-about.component.html',
  styleUrls: ['./barberia-about.component.scss']
})
export class BarberiaAboutComponent implements OnInit {
  tel: string;

  constructor() {
    this.tel = config.barberia.phone
   }

  ngOnInit() {
  }
  scrollTop(){
    window.scrollTo({top: 0, behavior: 'smooth'})
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
