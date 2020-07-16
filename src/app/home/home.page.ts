import { Observable } from 'rxjs';
import { EventsService } from './../services/events.service';
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetailModalComponent } from '../detail-modal/detail-modal.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  events_list: Observable<any>;
  current_user = localStorage.getItem('currentUser');
  constructor(public modalController: ModalController, private events_ser:EventsService) {

  }
  
  async presentModal(e) {
    const modal = await this.modalController.create({
      component: DetailModalComponent,
      cssClass: 'my-custom-class',
      componentProps: { 
        foo: 'hello',
        bar: 'world',
        results: this.events_list ,
        num: e
      }
    });
    return await modal.present();
  }

  sliderConfig = {
    spaceBetween: 4,
    centeredSlides: true,
    slidesPerView: 3
  }

  sliderConfigButton = {
    spaceBetween: 0,

    slidesPerView: 2.5
  }
  // events_list: Subscription;
  ngOnInit() {
    console.log('yolooo111')
    this.events_list= this.events_ser.getEvents();
    console.log('yolooo33333')
    console.log('yah',this.events_list);
    // Event= this.events_list[0]

  }

  get_events(){
    console.log('yaaaaa')
    this.events_ser.getEvents().subscribe(result=> console.log(result));
  }



}
