import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page404Component } from './page404.component';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: Page404Component}
   ])],
   exports: [RouterModule]
})
export class Page404Module { }
