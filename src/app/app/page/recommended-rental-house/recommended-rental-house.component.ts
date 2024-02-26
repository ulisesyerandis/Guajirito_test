import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef } from '@angular/core';
import {house} from '../../../Model/House'
import { OfertCardComponent } from '../../../ofert-card/ofert-card.component';

@Component({
  selector: 'app-recommended-rental-house',
  standalone: true,
  imports: 
  [
    CommonModule, OfertCardComponent
  ],
  templateUrl: './recommended-rental-house.component.html',
  styleUrl: './recommended-rental-house.component.css'
})
export class RecommendedRentalHouseComponent 
{
  father: string = 'house';
  houseList: house[] = [
    { img: 'assets/rentHouse/r.h 1.jfif', name: 'House 1', pricePerNight: 100, stars: 5, city: 'City 1' },
    { img: 'assets/rentHouse/r.h 2.jfif', name: 'House 2', pricePerNight: 120, stars: 4, city: 'Ciudad 2' },
    { img: 'assets/rentHouse/r.h 3.jfif', name: 'House 3', pricePerNight: 150, stars: 3, city: 'Ciudad 3' },
    { img: 'assets/rentHouse/r.h 4.jfif', name: 'House 4', pricePerNight: 100, stars: 5, city: 'Ciudad 1' },
    { img: 'assets/rentHouse/r.h 5.jfif', name: 'House 5', pricePerNight: 120, stars: 4, city: 'Ciudad 2' },
    { img: 'assets/rentHouse/r.h 6.jfif', name: 'House 6', pricePerNight: 150, stars: 3, city: 'Ciudad 3' },
    // Otros hoteles...
  ];

  currentIndex: number = 0;
  visibleHouses: any[] = [];

  @ViewChild('carrusel')
  carrusel!: ElementRef;

  ngOnInit() {
    this.actualizarHotelesVisibles();
  }

  moverCarrusel(address: number) {
    const numHouses = this.houseList.length;
    const numVisiblesHouses = 3; 
  
    if (address === -1) {
      this.currentIndex = (this.currentIndex - 3 + numHouses) % numHouses;
    } else if (address === 1) {
      this.currentIndex = (this.currentIndex + 3) % numHouses;
    }
  
    this.actualizarHotelesVisibles();
  }
  

  actualizarHotelesVisibles() {
    this.visibleHouses = this.houseList.slice(this.currentIndex, this.currentIndex + 3);
  }
  
}
