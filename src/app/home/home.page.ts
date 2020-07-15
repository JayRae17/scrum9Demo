import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetailModalComponent } from '../detail-modal/detail-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  fname = 'Anthony';
  lname = 'Ramos';
  current_date = '14/07/2020'
  events = [['Party', 'Beach Party Fun', 'TESTING r!  Off to the ocean we will goBring the bikini, leave the beau!'],
  ['Party', 'Beach Party Fun', 'TESTING r!  Off to the ocean we will goBring the bikini, leave the beau!'],
  ['Party', 'Beach Party Fun', 'TESTING r!  Off to the ocean we will goBring the bikini, leave the beau!']];
  

  constructor(public modalController: ModalController) {

  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: DetailModalComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  sliderConfig = {
    spaceBetween: 2,
    slidesPerView: 3
  }


}
