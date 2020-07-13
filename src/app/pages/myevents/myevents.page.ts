import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myevents',
  templateUrl: './myevents.page.html',
  styleUrls: ['./myevents.page.scss'],
})
export class MyeventsPage implements OnInit {
  sliderConfig = {
    spaceBetween: 4,
    centeredSlides: true,
    slidesPerView: 1.2
  }

  sliderConfigButton = {
    spaceBetween: 0,

    slidesPerView: 2.5
  }


  constructor() { }

  ngOnInit() {
  }

}
