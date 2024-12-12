import { Component } from '@angular/core';
import { StarWarsService } from '../../services/star-wars.service';
import { Planet } from '../../interfaces/planet_response.interface';

@Component({
  selector: 'app-planets-page',
  templateUrl: './planets-page.component.html',
})
export class PlanetsPageComponent {
  constructor(private planetService:StarWarsService) {
    this.getPlanetas()
    this.numPagePlaneta = 1;
  }
  public planetas: Planet[] = []
  numPagePlaneta:number = 1;

  getPlanetas():void {
    this.planetService.getPlanets(this.numPagePlaneta).subscribe(data => {
      data.results.forEach(planeta => {
        this.planetas.push(planeta)
      })
    })
  }
  getNextPlanets():void {
    if (this.numPagePlaneta < 6){
      this.numPagePlaneta++;
      this.getPlanetas()
    }
  }
}
