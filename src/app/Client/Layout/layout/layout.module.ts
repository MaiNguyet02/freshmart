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
import { Page404Component } from '../../Pages/page404/page404.component';
import { BlogComponent } from '../../Pages/blog/blog.component';

import { HomeModule } from '../../Pages/home/home.module';
import { DetailproductModule } from '../../Pages/detailproduct/detailproduct.module';
import { CategoryproductModule } from '../../Pages/categoryproduct/categoryproduct.module';
import { Page404Module } from '../../Pages/page404/page404.module';
import { BlogModule } from '../../Pages/blog/blog.module';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,

    HomeComponent,
    DetailproductComponent,
    CategoryproductComponent,
    Page404Component,
    BlogComponent,
  ],
  imports: [
    HomeModule,
    DetailproductModule,
    CategoryproductModule,
    Page404Module,
    BlogModule,


    CommonModule,
    BrowserModule,
    HttpClientModule
  ]
})
export class LayoutModule { }
