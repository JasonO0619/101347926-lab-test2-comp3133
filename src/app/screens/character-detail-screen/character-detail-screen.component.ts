import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiCallService } from '../../services/api-call.service';
import { Character } from '../../model/character';
import { CommonModule } from '@angular/common'; 
import { CharacterDetailsComponent } from '../../components/character-details/character-details.component';

@Component({
  standalone: true,
  selector: 'app-character-detail-screen',
  templateUrl: './character-detail-screen.component.html',
  styleUrls: ['./character-detail-screen.component.css'],
  imports: [
    CommonModule,
    CharacterDetailsComponent 
  ]
})
export class CharacterDetailScreenComponent implements OnInit {
  character!: Character;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiCallService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.apiService.getCharacterById(id).subscribe(data => {
        this.character = data[0];
        },
      );
    } else {
      console.warn('No character ID found in route.'); 
    }
  }
}
