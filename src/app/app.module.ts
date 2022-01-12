import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { BannerComponent } from './banner/banner.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FooterComponent } from './footer/footer.component';
import { WhiskyComponent } from './whisky/whisky.component';
import { BrandyComponent } from './brandy/brandy.component';
import { BeersComponent } from './beers/beers.component';
import { RumComponent } from './rum/rum.component';
import { VodkaComponent } from './vodka/vodka.component';
import { TaquilaComponent } from './taquila/taquila.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    FooterComponent,
    WhiskyComponent,
    BrandyComponent,
    BeersComponent,
    RumComponent,
    VodkaComponent,
    TaquilaComponent,
    PageNotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    SlickCarouselModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
