import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character_response.inteface';
import { Planet } from '../../interfaces/planet_response.interface';

@Component({
  selector: 'app-global-card',
  templateUrl: './global-card.component.html',
  styleUrl: './global-card.css'
})
export class GlobalCardComponent {

  @Input()
  public personaje?:Character

  @Input()
  public planeta?:Planet
}
