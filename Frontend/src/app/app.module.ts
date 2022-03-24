import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProprtyListComponent } from './property/proprty-list/proprty-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HousingService } from './sevices/housing.service';
import{CardComponent} from './property/card/card.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ProprtyListComponent,
    NavBarComponent,
    CardComponent,
    PropertyDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HousingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
