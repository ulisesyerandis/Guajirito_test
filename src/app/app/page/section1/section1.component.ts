import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
  selector: 'app-section1',
  standalone: true,
  imports: 
  [ 
    RouterModule, CommonModule, RouterOutlet, MatButtonModule, 
    MatDividerModule, MatIconModule, MatRadioModule, MatTooltipModule
  ],
  templateUrl: './section1.component.html',
  styleUrl: './section1.component.css'
})
export class Section1Component {

}
