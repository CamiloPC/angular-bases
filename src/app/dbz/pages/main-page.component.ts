import { Component } from '@angular/core';
import { ListComponent } from '../components/list/list.component';
import { AddCharacterComponent } from '../components/add-character/add-character.component';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  standalone: true,
  imports: [ListComponent, AddCharacterComponent],
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor( private dbzService: DbzService ) {

  }

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter ( id: string ): void {
    this.dbzService.deleteCharacterById( id );
  }

  onNewCharacter ( character: Character ): void {
    this.dbzService.addCharacter( character );
  }

}
