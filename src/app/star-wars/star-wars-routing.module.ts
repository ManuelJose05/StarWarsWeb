import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeoplePageComponent } from './pages/people-page/people-page.component';
import { PlanetsPageComponent } from './pages/planets-page/planets-page.component';
import { MultiPageComponent } from './pages/multi-page/multi-page.component';

const routes : Routes = [
    {
        path: 'by-person-name',
        component: PeoplePageComponent
    },
    {
        path: 'planets',
        component: PlanetsPageComponent
    },
    {
        path: 'both',
        component: MultiPageComponent
    },
    {
        path: '**',
        redirectTo: 'by-person-name'
    }
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
})
export class StarWarsRoutingModule { }
