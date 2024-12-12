import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { StarWarsService } from '../../services/star-wars.service';
import { Planet } from '../../interfaces/planet_response.interface';
import { Character } from '../../interfaces/character_response.inteface';
import { catchError, debounce, debounceTime } from 'rxjs';
import { OnSameUrlNavigation } from '@angular/router';

@Component({
  selector: 'app-multi-page',
  templateUrl: './multi-page.component.html',
})
export class MultiPageComponent implements OnInit {
  constructor(private starWarsService:StarWarsService){
  }
  ngOnInit(): void {
    this.tag = localStorage.getItem('tag')!
    this.findPlanet()
    this.findCharacter()
  }
  tag:string = ''
  personaje?:Character
  planeta?:Planet

  findCharacter():void{
    this.starWarsService.searchCharacterByName()
    .subscribe(data => {
      console.log('buscando')
      console.log(this.tag)
      data.results.map((value) => {
        if (value['name'].trim().toLocaleLowerCase() == this.tag!.trim().toLocaleLowerCase()) this.personaje = value
      })
    })
  }

  findPlanet():void{
    for (let index = 0; index < 6; index++) {
      this.starWarsService.getPlanets(index + 1)
      .subscribe(data => {
        data.results.map((value) => {
          if (value['name'].trim().toLocaleLowerCase() == this.tag!.trim().toLocaleLowerCase()) this.planeta = value
        })
      })
    }
  }
}
