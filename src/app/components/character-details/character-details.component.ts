import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Character } from '../../model/character';
import { Router } from '@angular/router';

@Component({
  selector: 'app-character-details',
  standalone: true,
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css'],
  imports: [
    CommonModule,
    MatCardModule
  ]
})

export class CharacterDetailsComponent implements OnChanges {
  @Input() character!: Character;

  particles = Array.from({ length: 100 }, () => ({
    left: `${Math.random() * 100}vw`,
    size: `${Math.random() * 5 + 2}px`,
    delay: `${Math.random() * 10}s`,
    duration: `${5 + Math.random() * 10}s`
  }));
  
  constructor(private router: Router) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Character input changed:', changes['character'].currentValue); // 🔍 Shows what's passed in
  }

  goBack(): void {
    this.router.navigate(['characters']); 
  }
}
