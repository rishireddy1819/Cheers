import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { BeersComponent } from './beers/beers.component';
import { BrandyComponent } from './brandy/brandy.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RumComponent } from './rum/rum.component';
import { TaquilaComponent } from './taquila/taquila.component';
import { VodkaComponent } from './vodka/vodka.component';
import { WhiskyComponent } from './whisky/whisky.component';

const routes: Routes = [
  {path: '', redirectTo: '/banner', pathMatch: 'full'},
  {path: 'banner', component: BannerComponent},
  {path: 'whisky', component: WhiskyComponent},
  {path: 'brandy', component: BrandyComponent},
  {path: 'beers', component: BeersComponent},
  {path: 'rum', component: RumComponent},
  {path: 'vodka', component: VodkaComponent},
  {path: 'taquila', component: TaquilaComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
