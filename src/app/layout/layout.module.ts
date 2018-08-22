import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [NavComponent, FooterComponent, MainComponent],
  // 給外部使用的組件，需要 exports 出來 (外部樣板需要使用才 export，若是在內部的 module 使用就不用 export)
  exports: [NavComponent, FooterComponent]
})
export class LayoutModule { }
