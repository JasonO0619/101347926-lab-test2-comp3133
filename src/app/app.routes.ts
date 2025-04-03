import { Routes } from '@angular/router';
import { MainCharacterScreenComponent } from './screens/main-character-screen/main-character-screen.component';
import { CharacterDetailScreenComponent } from './screens/character-detail-screen/character-detail-screen.component';

export const routes: Routes = [
  { path: '', redirectTo: '/characters', pathMatch: 'full' },
  { path: 'characters', component: MainCharacterScreenComponent },
  { path: 'character/:id', component: CharacterDetailScreenComponent }
];
