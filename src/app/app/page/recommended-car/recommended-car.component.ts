import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { car } from '../../../Model/Car';
import { OfertCardComponent } from '../../../ofert-card/ofert-card.component';

@Component({
  selector: 'app-recommended-car',
  standalone: true,
  imports: 
  [
    CommonModule, OfertCardComponent
  ],
  templateUrl: './recommended-car.component.html',
  styleUrl: './recommended-car.component.css'
})
export class RecommendedCarComponent 
{
  father: string = 'car';
  carList: car[] = [
    { img: 'assets/cars/car1.jfif', type: 'car 1', pricePerDay: 100, stars: 5 },
    { img: 'assets/cars/car2.jfif', type: 'car 2', pricePerDay: 120, stars: 4 },
    { img: 'assets/cars/car3.jfif', type: 'car 3', pricePerDay: 150, stars: 3 },
    { img: 'assets/cars/car4.jfif', type: 'car 4', pricePerDay: 100, stars: 5 },
    { img: 'assets/cars/car5.jfif', type: 'car 5', pricePerDay: 120, stars: 4 },
    { img: 'assets/cars/car6.jfif', type: 'car 6', pricePerDay: 150, stars: 3 },
    // Otros hoteles...
  ];

  currentIndex: number = 0;
  visiblesCar: any[] = [];

  @ViewChild('carrusel')
  carrusel!: ElementRef;

  ngOnInit() {
    this.actualizarHotelesVisibles();
  }

  moverCarrusel(address: number) {
    const numCar = this.carList.length;
    const numVisiblesCar = 3; 
  
    if (address === -1) {
      this.currentIndex = (this.currentIndex - 3 + numCar) % numCar;
    } else if (address === 1) {
      this.currentIndex = (this.currentIndex + 3) % numCar;
    }
  
    this.actualizarHotelesVisibles();
  }
  

  actualizarHotelesVisibles() {
    this.visiblesCar = this.carList.slice(this.currentIndex, this.currentIndex + 3);
  }
}
