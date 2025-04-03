import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

@Component({
  selector: 'app-character-filter',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule
  ],
  templateUrl: './character-filter.component.html',
  styleUrls: ['./character-filter.component.css']
})
export class CharacterFilterComponent {
  @Output() houseSelected = new EventEmitter<string>();

  houses: string[] = ['All', 'Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw', 'No House'];

  onSelectHouse(house: string) {
    this.houseSelected.emit(house);
  }
}