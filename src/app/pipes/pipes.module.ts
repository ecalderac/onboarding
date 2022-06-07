import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Pipes
import { CapitalizePipe } from './capitalize/capitalize.pipe';


@NgModule({
  declarations: [
    CapitalizePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CapitalizePipe
  ]
})
export class PipesModule { }
