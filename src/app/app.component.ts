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
import { RecommendedRentalHouseComponent } from './app/page/recommended-rental-house/recommended-rental-house.component';
import { RecommendedCarComponent } from './app/page/recommended-car/recommended-car.component';
import { OfertCardComponent } from './ofert-card/ofert-card.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        CommonModule, RouterOutlet, MatButtonModule,
        MatDividerModule, MatIconModule,
        Section1Component, Section2Component, Section3Component,
        HeaderComponentComponent, RecomendationComponent,
        RecommendedRentalHouseComponent, RecommendedCarComponent,
        OfertCardComponent,
    ]
})
export class AppComponent 
{
  title = 'guajiritos';
}
