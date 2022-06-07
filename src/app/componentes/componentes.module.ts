import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//Componentes
import { HeroProfileComponent } from './hero-profile/hero-profile.component';
import { ListadoDeHeroesComponent } from './listado-de-heroes/listado-de-heroes.component';
import { ModalPollComponent } from './modal-poll/modal-poll.component';
import { SpinnerComponent } from './spinner/spinner.component';

//Pipes
import { PipesModule } from '../pipes/pipes.module';


@NgModule({
  declarations: [
    HeroProfileComponent,
    ListadoDeHeroesComponent,
    ModalPollComponent,
    SpinnerComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    PipesModule
  ],
  exports: [
    HeroProfileComponent,
    ListadoDeHeroesComponent,
    ModalPollComponent,
    SpinnerComponent
  ]
})
export class ComponentesModule { }
