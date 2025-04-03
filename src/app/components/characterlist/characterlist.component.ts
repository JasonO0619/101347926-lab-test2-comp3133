import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterModule, Router } from '@angular/router';
import { Character } from '../../model/character';
@Component({
  selector: 'app-characterlist',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule
  ],
  templateUrl: './characterlist.component.html',
  styleUrls: ['./characterlist.component.css']
})
export class CharacterlistComponent {
  @Input() characters: Character[] = [];

  particles = Array.from({ length: 100 }, () => ({
    left: `${Math.random() * 100}vw`,
    size: `${Math.random() * 5 + 2}px`,
    delay: `${Math.random() * 10}s`,
    duration: `${5 + Math.random() * 10}s`
  }));

  constructor(private router: Router) {}

  viewDetails(character: Character) {
    this.router.navigate(['/character', character.id]);
  }
}