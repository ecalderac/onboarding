import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Servicios
import { ServicesModule } from './services/services.module';

//Componentes
import { ComponentesModule } from './componentes/componentes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ServicesModule,
    ComponentesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
