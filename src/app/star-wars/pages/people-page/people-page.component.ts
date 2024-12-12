import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StarWarsService } from '../../services/star-wars.service';
import { Character } from '../../interfaces/character_response.inteface';
import { GifsService } from '../../services/gifs.service';
import { Datum } from '../../interfaces/gif_response.interface';

@Component({
  selector: 'app-people-page',
  templateUrl: './people-page.component.html',
})
export class PeoplePageComponent {
  constructor(private characterService:StarWarsService,
    private gifService:GifsService
  ){
    this.getPersonaje();
  }

  characters?: Character[]
  gifLIst?:Datum[]

  getPersonaje():void{
    this.characterService.searchCharacterByName().subscribe(data => {
      this.characters = data.results;
      this.getGifsPersonajes()
      this.gifLIst = this.gifService.gifList
    })
    
  }
  getGifsPersonajes():void{
    this.characters?.forEach((personaje) => {
      this.gifService.searchTag(personaje.name)
    })
  }

  @Output()
  public onCharacter:EventEmitter<Character[]> = new EventEmitter;

  @Output()
  public onGif:EventEmitter<Datum[]> = new EventEmitter;

  sendCharacter():void{
    this.onCharacter.emit(this.characters)
    this.onGif.emit(this.gifLIst)
  }
}
