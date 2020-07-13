import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-createvent',
  templateUrl: './createvent.page.html',
  styleUrls: ['./createvent.page.scss'],
})

export class CreateventPage implements OnInit {

  constructor(public toastController: ToastController) {

  }

  async openToast() {
    const toast = await this.toastController.create({
      message: 'Your settings have been saved.',
      duration: 2000
    });
    toast.present();
  
  }
  



  ngOnInit() {
  }

}
