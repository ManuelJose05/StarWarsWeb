import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleCardComponent } from './components/people-card/people-card.component';
import { PlanetTableComponent } from './components/planet-table/planet-table.component';
import { PeoplePageComponent } from './pages/people-page/people-page.component';
import { PlanetsPageComponent } from './pages/planets-page/planets-page.component';
import { StarWarsRoutingModule } from './star-wars-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { MultiPageComponent } from './pages/multi-page/multi-page.component';
import { GlobalCardComponent } from './components/global-card/global-card.component';



@NgModule({
  declarations: [
    PeopleCardComponent,
    PlanetTableComponent,
    PeoplePageComponent,
    PlanetsPageComponent,
    MultiPageComponent,
    GlobalCardComponent
  ],
  imports: [
    CommonModule,
    StarWarsRoutingModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    PeopleCardComponent,
    PlanetTableComponent,
    PeoplePageComponent,
    PlanetsPageComponent,
    MultiPageComponent,
    GlobalCardComponent
  ]
})
export class StarWarsModule { }
