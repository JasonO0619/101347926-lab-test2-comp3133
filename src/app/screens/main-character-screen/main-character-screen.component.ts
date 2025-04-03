import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';
import { Character } from '../../model/character';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';

import { CharacterlistComponent } from '../../components/characterlist/characterlist.component';
import { CharacterFilterComponent } from '../../components/character-filter/character-filter.component';


@Component({
  selector: 'app-main-character-screen',
  standalone: true,
  imports: [
    CommonModule,
    CharacterlistComponent,
    CharacterFilterComponent,
    MatToolbarModule,
    MatSelectModule,
    MatCardModule
  ],
  templateUrl: './main-character-screen.component.html',
  styleUrls: ['./main-character-screen.component.css']  
})
export class MainCharacterScreenComponent implements OnInit {

  characters: Character[] = [];

  constructor(private apiService: ApiCallService) {}

  ngOnInit(): void {
    this.loadAllCharacters();
  }

  loadAllCharacters(): void {
    this.apiService.getAllCharacters().subscribe(data => {
      this.characters = data;
    });
  }

  onHouseSelected(house: string): void {
    if (house === 'All') {
      this.loadAllCharacters();
    } else if (house === 'No House') {
      this.apiService.getAllCharacters().subscribe(data => {
        this.characters = data.filter(char => !char.house);
      });
    } else {
      this.apiService.getCharactersByHouse(house).subscribe(data => {
        this.characters = data;
      });
    }
  }
}
