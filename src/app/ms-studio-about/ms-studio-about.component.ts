import { Component, OnInit } from '@angular/core';
import { config } from 'src/assets/config';

@Component({
  selector: 'app-ms-studio-about',
  templateUrl: './ms-studio-about.component.html',
  styleUrls: ['./ms-studio-about.component.scss']
})
export class MsStudioAboutComponent implements OnInit {
  tel: string;

  constructor() {
    this.tel = config.barberia.phone
   }

  ngOnInit() {
  }
  scrollTop(){
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  goToMsStudio(){
    window.open(config.msStudio.booksyURL, '_blank')
  }
  openFacebook(){
    window.open(config.msStudio.facebookURL, '_blank')
  }
  openInsta(){
    window.open(config.msStudio.instagramURL, '_blank')
  }

}
