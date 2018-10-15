import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { AppRoutingModule } from './app-routing.module';
import { PagenotFoundComponent } from './components/pagenot-found/pagenot-found.component';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavigationComponent,
    CatalogComponent,
    PagenotFoundComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
