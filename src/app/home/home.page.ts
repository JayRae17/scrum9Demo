import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetailModalComponent } from '../detail-modal/detail-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  events:any;
  current_user:any;

  current_date = '14/07/2020'

  constructor(public modalController: ModalController) {

    this.current_user=[
      {
        "fname": "Anthony",
        "lname": "Ramos",
        "username": "Tonytones",
        "email": "tony@gmail.com",
        "password": "283ehw8",
        "admin": 0,
      }
    ]
    
      // NOT PICKING UP attributes
      console.log(this.current_user.fname);

    this.events=[
      {
        "name": "Beach Party Fun",
        "category": "Party",
        "description": "Off to the ocean we will go, Bring the bikini, leave the beau!",
        "date": null,
        "location": null,
        "startTime": null,
        "endTime": null,
        "cost": 4000

      },
      {
        "name": "Beach Party Fun",
        "category": "Party",
        "description": "Off to the ocean we will go, Bring the bikini, leave the beau!",
        "date": null,
        "location": null,
        "startTime": null,
        "endTime": null,
        "cost": 4000

      },
      {
        "name": "Beach Party Fun",
        "category": "Party",
        "description": "Off to the ocean we will go, Bring the bikini, leave the beau!",
        "date": null,
        "location": null,
        "startTime": null,
        "endTime": null,
        "cost": 4000

      }
    ]

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
