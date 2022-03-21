import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OsobaStrankaComponent} from './osoba/osoba-stranka/osoba-stranka.component';
import {KnihyStrankaComponent} from "./knihy/knihy-stranka/knihy-stranka.component";

const routes: Routes = [
  {
    path: 'osoba',
    component: OsobaStrankaComponent
  },
  {
    path: 'kniha',
    component: KnihyStrankaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
