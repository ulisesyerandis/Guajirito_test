import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { Section1Component } from './app/page/section1/section1.component';
import { Section2Component } from './app/page/section2/section2.component';
import { Section3Component } from './app/page/section3/section3.component';
import { HeaderComponentComponent } from './app/page/header/header-component.component';
import { RecomendationComponent } from './app/page/recomendation/recomendation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: 
  [
    CommonModule, RouterOutlet, MatButtonModule, 
    MatDividerModule, MatIconModule,
    Section1Component, Section2Component, Section3Component,
    HeaderComponentComponent, RecomendationComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
{
  title = 'guajiritos';
}
