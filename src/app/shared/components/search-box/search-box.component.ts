import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../../star-wars/interfaces/character_response.inteface';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {

  @Output()
  public characterName: EventEmitter<string> = new EventEmitter

  onCharacterName(name:string):void{
    this.characterName.emit(name)
  }
}
