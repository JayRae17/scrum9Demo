import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetailModalComponent } from '../detail-modal/detail-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
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
    spaceBetween: 4,
    centeredSlides: true,
    slidesPerView: 1.2
  }

  sliderConfigButton = {
    spaceBetween: 0,

    slidesPerView: 2.5
  }

  

}
