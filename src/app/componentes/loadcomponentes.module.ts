import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ListadoDeHeroesComponent } from './listado-de-heroes/listado-de-heroes.component';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';
import { ModalPollComponent } from './modal-poll/modal-poll.component';


const childRoutes: Routes = [
  { path: 'listado-heroes', component: ListadoDeHeroesComponent },
  { path: 'heroe/:id', component: HeroProfileComponent },
  { path: 'modal-poll', component: ModalPollComponent },
  { path: '**', redirectTo: '/listado-heroes' }
]

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class LoadcomponentesModule { } 
