import { AfterViewInit, Component, OnInit } from '@angular/core';
import { config } from 'src/assets/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  barberiaTel: string;
  msStudioTel: string;

  constructor(){
    this.barberiaTel = config.barberia.phone;
    this.msStudioTel = config.msStudio.phone;
  }

  ngOnInit(): void {
    window.scrollTo({top: 0, behavior: 'auto'});
    window.onbeforeunload = function() {window.scrollTo(0,0);}

  }
  ngAfterViewInit(): void {
    window.scrollTo({top: 0, behavior: 'auto'});
  }
  title = 'zielony-gaj';

  goToBarberia(){
    window.open(config.barberia.booksyURL, '_blank')
  }

  goToMsStudio(){
    window.open(config.msStudio.booksyURL, '_blank')
  }

  openFacebook(){
    window.open(config.zielonyGaj.facebookURL, '_blank')
  }

  openInsta(){
    window.open(config.zielonyGaj.instagramURL, '_blank')
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }
}
