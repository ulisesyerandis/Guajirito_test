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
    { img: 'assets/hoteles/hotel 1.jfif', name: 'Melia Cohiba', pricePerNight: 100, stars: 5, city: 'La Habana' },
    { img: 'assets/hoteles/hotel 2.jfif', name: 'Playa Giron', pricePerNight: 120, stars: 2, city: 'Matanzas' },
    { img: 'assets/hoteles/hotel 3.jfif', name: 'Hotel Jagua', pricePerNight: 150, stars: 3, city: 'Cienfuego' },
    { img: 'assets/hoteles/hotel 4.jfif', name: 'Melia Santiago', pricePerNight: 100, stars: 5, city: 'Santiago de Cuba' },
    { img: 'assets/hoteles/hotel 5.jfif', name: 'Hotel Central', pricePerNight: 120, stars: 1, city: 'Villa Clara' },
    { img: 'assets/hoteles/hotel 6.jfif', name: 'Hotel Rex', pricePerNight: 150, stars: 3, city: 'Santiago de Cuba' },
  ];

  currentIndex: number = 0;
  VisiblesHotels: any[] = [];

  @ViewChild('carrusel')
  carrusel!: ElementRef;

  ngOnInit() {
    this.updateVisiblesHotels();
  }

  moverCarrusel(address: number) {
    const numHoteles = this.hoteList.length;
    const numVisiblesHotels = 3;
  
    if (address === -1) {
      this.currentIndex = (this.currentIndex - 3 + numHoteles) % numHoteles;
    } else if (address === 1) {
      this.currentIndex = (this.currentIndex + 3) % numHoteles;
    }
  
    this.updateVisiblesHotels();
  }
  

  updateVisiblesHotels() {
    this.VisiblesHotels = this.hoteList.slice(this.currentIndex, this.currentIndex + 3);
  }
  


}

