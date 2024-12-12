import { Component, Input, input } from '@angular/core';
import { StarWarsService } from '../../services/star-wars.service';
import { Planet } from '../../interfaces/planet_response.interface';

@Component({
  selector: 'app-planet-table',
  templateUrl: './planet-table.component.html',
})
export class PlanetTableComponent {
  @Input()
  public planetas?: Planet[]
}
