import { Injectable } from '@angular/core';
import { catchError, debounceTime, Observable, of } from 'rxjs';
import { Character, CharacterResponse } from '../interfaces/character_response.inteface';
import { HttpClient } from '@angular/common/http';
import { Planet, PlanetsResponse } from '../interfaces/planet_response.interface';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {
  constructor(private http: HttpClient) {
   }

  private url:string = 'https://swapi.dev/api'
  private urlPlanets:string = 'https://swapi.dev/api/planets';
  
  searchCharacterByName():Observable<CharacterResponse> {
    return this.http.get<CharacterResponse>(`${this.url}/people`).pipe(debounceTime(300))
  }
  
  getPlanets(numPage:number):Observable<PlanetsResponse> {
    return this.http.get<PlanetsResponse>(`${this.urlPlanets}/?page=${numPage}`).pipe(debounceTime(300))
  }

}
