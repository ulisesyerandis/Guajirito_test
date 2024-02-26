import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef } from '@angular/core';
// import { hotelModel } from '../../Model/hotelModel.ts';
@Component({
  selector: 'app-recomendation',
  standalone: true,
  imports: 
  [
    CommonModule
  ],
  templateUrl: './recomendation.component.html',
  styleUrl: './recomendation.component.css'
})
export class RecomendationComponent 
{
  listaHoteles: any[] = [
    { img: 'assets/hoteles/hotel 1.jfif', nombre: 'Hotel 1', precioPorNoche: 100, cantidadEstrellas: 5, ciudad: 'Ciudad 1' },
    { img: 'assets/hoteles/hotel 2.jfif', nombre: 'Hotel 2', precioPorNoche: 120, cantidadEstrellas: 4, ciudad: 'Ciudad 2' },
    { img: 'assets/hoteles/hotel 3.jfif', nombre: 'Hotel 3', precioPorNoche: 150, cantidadEstrellas: 3, ciudad: 'Ciudad 3' },
    { img: 'assets/hoteles/hotel 4.jfif', nombre: 'Hotel 4', precioPorNoche: 100, cantidadEstrellas: 5, ciudad: 'Ciudad 1' },
    { img: 'assets/hoteles/hotel 5.jfif', nombre: 'Hotel 5', precioPorNoche: 120, cantidadEstrellas: 4, ciudad: 'Ciudad 2' },
    { img: 'assets/hoteles/hotel 6.jfif', nombre: 'Hotel 6', precioPorNoche: 150, cantidadEstrellas: 3, ciudad: 'Ciudad 3' },
    // Otros hoteles...
  ];

  currentIndex: number = 0;
  hotelesVisibles: any[] = [];

  @ViewChild('carrusel')
  carrusel!: ElementRef;

  ngOnInit() {
    this.actualizarHotelesVisibles();
  }

  moverCarrusel(direccion: number) {
    const numHoteles = this.listaHoteles.length;
    const numHotelesVisibles = 3; // Número de hoteles visibles a la vez
  
    if (direccion === -1) {
      this.currentIndex = (this.currentIndex - 3 + numHoteles) % numHoteles;
    } else if (direccion === 1) {
      this.currentIndex = (this.currentIndex + 3) % numHoteles;
    }
  
    this.actualizarHotelesVisibles();
  }
  

  actualizarHotelesVisibles() {
    this.hotelesVisibles = this.listaHoteles.slice(this.currentIndex, this.currentIndex + 3);
  }
  
}

