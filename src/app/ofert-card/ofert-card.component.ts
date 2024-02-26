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
[x: string]: any;
  @Input()father: string = '';
  @Input()img: string = '';
  @Input()name: string = 'sin nombre';
  @Input()price: number = 0;
  @Input()city: string = '';
  @Input()stars: number = 0;

  maxValue: number = 4;

  generateRange(value: number): number[] {
    return Array.from({ length: value }, (_, index) => index);
  }


}


