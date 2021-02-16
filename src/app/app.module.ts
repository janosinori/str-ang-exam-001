import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './page/hero/hero.component';
import { HomeComponent } from './page/home/home.component';
import { NavigationComponent } from './page/navigation/navigation.component';
import { FilterPipe } from './pipe/filter.pipe';
import { SorterPipe } from './pipe/sorter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HomeComponent,
    NavigationComponent,
    FilterPipe,
    SorterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
