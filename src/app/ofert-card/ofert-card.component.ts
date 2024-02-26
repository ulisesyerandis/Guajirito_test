import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ofert-card',
  standalone: true,
  imports: 
  [
    CommonModule,
  ],
  templateUrl: './ofert-card.component.html',
  styleUrl: './ofert-card.component.css'
})
export class OfertCardComponent 
{
  @Input()father: string = '';
  @Input()img: string = '';
  @Input()name: string = 'sin nombre';
  @Input()price: string = '';
  @Input()city: string = '';
  @Input()stars: string = '';



}


