import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProprtyListComponent } from './property/proprty-list/proprty-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HousingService } from './sevices/housing.service';
import{CardComponent} from './property/card/card.component';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UsersService } from './sevices/users.service';
import { AlertifyService } from './sevices/alertify.service';

@NgModule({
  declarations: [
    AppComponent,
    ProprtyListComponent,
    NavBarComponent,
    CardComponent,
    PropertyDetailComponent,
    AddPropertyComponent,
    UserLoginComponent,
    UserRegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HousingService,UsersService,AlertifyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
