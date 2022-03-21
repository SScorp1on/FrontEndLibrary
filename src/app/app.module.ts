import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { OsobaZoznamComponent } from './osoba/osoba-zoznam/osoba-zoznam.component';
import { OsobaFormularComponent } from './osoba/osoba-formular/osoba-formular.component';
import {AppRoutingModule} from './app-routing.module';
import { MenuComponent } from './menu/menu.component';
import {RouterModule} from '@angular/router';
import { OsobaStrankaComponent } from './osoba/osoba-stranka/osoba-stranka.component';
import {HttpClientModule} from '@angular/common/http';
import { KnihyZoznamComponent } from './knihy/knihy-zoznam/knihy-zoznam.component';
import { KnihyFormularComponent } from './knihy/knihy-formular/knihy-formular.component';
import { KnihyStrankaComponent } from './knihy/knihy-stranka/knihy-stranka.component';

@NgModule({
  declarations: [
    AppComponent,
    OsobaZoznamComponent,
    OsobaFormularComponent,
    MenuComponent,
    OsobaStrankaComponent,
    KnihyZoznamComponent,
    KnihyFormularComponent,
    KnihyStrankaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
