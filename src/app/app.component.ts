import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'zielony-gaj';

  goToBarberia(){
    window.open('https://booksy.com/pl-pl/122799_barberia-fryzjer-meski-i-golibroda_barber-shop_16979_gadki#ba_s=sh_1', '_blank')
  }

  openFacebook(){
    window.open('https://www.facebook.com/Zielony-Gaj-100625792599151', '_blank')
  }

  openInsta(){
    window.open('https://www.instagram.com/explore/locations/100625792599151/zielony-gaj/?hl=pl', '_blank')
  }
}
