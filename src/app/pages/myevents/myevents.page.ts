import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetailModalComponent } from '../../detail-modal/detail-modal.component';


@Component({
  selector: 'app-myevents',
  templateUrl: './myevents.page.html',
  styleUrls: ['./myevents.page.scss'],
})

export class MyeventsPage implements OnInit {

  fname = 'Anthony';
  lname = 'Ramos';
  current_date = '14/07/2020'

  usersevents:any;
 
  
  constructor(public modalController: ModalController) {

    this.usersevents=[
      {
        "name": "Beach Party Fun",
        "category": "Party",
        "description": "Off to the ocean we will go, Bring the bikini, leave the beau!",
        "date": null,
        "location": null,
        "startTime": null,
        "endTime": null,
        "cost": 4000,
        "status":0

      },
      {
        "name": "Beach Party Fun",
        "category": "Party",
        "description": "Off to the ocean we will go, Bring the bikini, leave the beau!",
        "date": null,
        "location": null,
        "startTime": null,
        "endTime": null,
        "cost": 4000,
        "status":1

      },
      {
        "name": "Beach Party Fun",
        "category": "Party",
        "description": "Off to the ocean we will go, Bring the bikini, leave the beau!",
        "date": null,
        "location": null,
        "startTime": null,
        "endTime": null,
        "cost": 4000,
        "status":0

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



  ngOnInit() {
  }

}
