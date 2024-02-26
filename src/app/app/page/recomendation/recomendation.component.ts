import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef } from '@angular/core';
// import { hotelModel } from '../../Model/hotelModel.ts';
import { hotel } from '../../../Model/Hotel';
import { OfertCardComponent } from '../../../ofert-card/ofert-card.component';
@Component({
  selector: 'app-recomendation',
  standalone: true,
  imports: 
  [
    CommonModule, OfertCardComponent
  ],
  templateUrl: './recomendation.component.html',
  styleUrl: './recomendation.component.css'
})
export class RecomendationComponent 
{
  father: string = 'hotel';
  hoteList: hotel[] = [
    { img: 'assets/hoteles/hotel 1.jfif', name: 'Hotel 1', pricePerNight: 100, stars: 5, city: 'Ciudad 1' },
    { img: 'assets/hoteles/hotel 2.jfif', name: 'Hotel 2', pricePerNight: 120, stars: 4, city: 'Ciudad 2' },
    { img: 'assets/hoteles/hotel 3.jfif', name: 'Hotel 3', pricePerNight: 150, stars: 3, city: 'Ciudad 3' },
    { img: 'assets/hoteles/hotel 4.jfif', name: 'Hotel 4', pricePerNight: 100, stars: 5, city: 'Ciudad 1' },
    { img: 'assets/hoteles/hotel 5.jfif', name: 'Hotel 5', pricePerNight: 120, stars: 4, city: 'Ciudad 2' },
    { img: 'assets/hoteles/hotel 6.jfif', name: 'Hotel 6', pricePerNight: 150, stars: 3, city: 'Ciudad 3' },
  ];

  currentIndex: number = 0;
  VisiblesHotels: any[] = [];

  @ViewChild('carrusel')
  carrusel!: ElementRef;

  ngOnInit() {
    this.actualizarHotelesVisibles();
  }

  moverCarrusel(address: number) {
    const numHoteles = this.hoteList.length;
    const numVisiblesHotels = 3;
  
    if (address === -1) {
      this.currentIndex = (this.currentIndex - 3 + numHoteles) % numHoteles;
    } else if (address === 1) {
      this.currentIndex = (this.currentIndex + 3) % numHoteles;
    }
  
    this.actualizarHotelesVisibles();
  }
  

  actualizarHotelesVisibles() {
    this.VisiblesHotels = this.hoteList.slice(this.currentIndex, this.currentIndex + 3);
  }
  
}

