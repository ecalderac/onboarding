import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoDeHeroesComponent } from './componentes/listado-de-heroes/listado-de-heroes.component';
import { HeroesService } from './services/heroes.service';
import { HeroProfileComponent } from './componentes/hero-profile/hero-profile.component';
import { SpinnerComponent } from './componentes/spinner/spinner.component';
import { ModalPollComponent } from './componentes/modal-poll/modal-poll.component';
import { CapitalizePipe } from './pipes/capitalize.pipe'; 

@NgModule({
  declarations: [
    AppComponent,
    ListadoDeHeroesComponent,
    HeroProfileComponent,
    SpinnerComponent,
    ModalPollComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
