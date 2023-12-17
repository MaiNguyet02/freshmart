import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { LayoutComponent } from '../layout/layout.component';

import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

import { HomeComponent } from '../../Pages/home/home.component';
import { DetailproductComponent } from '../../Pages/detailproduct/detailproduct.component';
import { CategoryproductComponent } from '../../Pages/categoryproduct/categoryproduct.component';

import { HomeModule } from '../../Pages/home/home.module';
import { DetailproductModule } from '../../Pages/detailproduct/detailproduct.module';
import { CategoryproductModule } from '../../Pages/categoryproduct/categoryproduct.module';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,

    HomeComponent,
    DetailproductComponent,
    CategoryproductComponent,
  ],
  imports: [
    HomeModule,
    DetailproductModule,
    CategoryproductModule,


    CommonModule,
    BrowserModule,
    HttpClientModule
  ]
})
export class LayoutModule { }
