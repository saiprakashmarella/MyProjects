import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProfileComponent } from './profile/profile.component';
import { PNFComponent } from './pnf/pnf.component';
import { TestComponent } from './test/test.component';
import { ItemsComponent } from './items/items.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: MainPageComponent },
  { path: 'mainpage', component: ProfileComponent },
  { path: 'items', component: ItemsComponent },
  { path: '**', component: PNFComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'pnf', component: PNFComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents = [MainPageComponent, ProfileComponent, PNFComponent, TestComponent, ItemsComponent, DetailsComponent];