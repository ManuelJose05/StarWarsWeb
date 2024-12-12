import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character_response.inteface';
import { Datum } from '../../interfaces/gif_response.interface';

@Component({
  selector: 'app-people-card',
  templateUrl: './people-card.component.html',
})
export class PeopleCardComponent {
  @Input()
  characters?:Character[]

  @Input()
  gifList?:Datum[]
}
