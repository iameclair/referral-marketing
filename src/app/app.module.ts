import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { AppRoutingModule } from './app-routing.module';
import { PagenotFoundComponent } from './components/pagenot-found/pagenot-found.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { FooterComponent } from './components/commons/footer/footer.component';
import { PartnerComponent } from './components/partner/partner.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavigationComponent,
    CatalogComponent,
    PagenotFoundComponent,
    FooterComponent,
    PartnerComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatDialogModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
