import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-modal',
  templateUrl: './detail-modal.component.html',
  styleUrls: ['./detail-modal.component.scss'],
})
export class DetailModalComponent {

  constructor(public modalController: ModalController, private router: Router, private route:ActivatedRoute) { }

  dismissModal(){
    this.modalController.dismiss();

  }

// CHANGE ROUTES
  moveNext(){ 
    this.router.navigate(['../edit-event'], { relativeTo: this.route });
    this.modalController.dismiss();
  }
   
 

}
