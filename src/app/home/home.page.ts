import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})



export class HomePage {

  
  @ViewChild('slide',{static:true}) slide : IonSlides;
  //https://www.youtube.com/watch?v=ECKXIzhiuwE
  slides = [
    {
      img: 'assets/img/yoga.svg',
      tittle: 'Mantente en armonía'
    },
    {
      img: 'assets/img/aptitud.svg',
      tittle: 'Plan de ejercicio semanal'
    },
    {
      img: 'assets/img/cuidado.svg',
      tittle: 'Tu salud no tiene precio'
    }
  ]
  slideOptions = {
    initialSlide: 0,
    speed: 1000,
    autoplay: {
      disableOnInteraction: false
    }
  };

  

  constructor(
    public ruter: Router) { 


    }

  
  ionViewDidEnter() {
    this.slide.startAutoplay();
  }

  ionViewWillLeave(){
    this.slide.stopAutoplay();
  }

  


  goSigIn()
  {
     // this.ruter.navigate(['registro',this.data]);
     this.ruter.navigate(['sig-in']);
  }

  goLogin()
  {
    this.ruter.navigate(['login']);
  }

 

}
