import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


import { AppComponent } from './app.component';
import { TemperaturaComponent } from './formulario/temperatura/temperatura.component';
import { MultiplicacionAbComponent } from './formulario/multiplicacion-ab/multiplicacion-ab.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu/menu.component';
import { MaterialModule } from './material/material/material.module';
import { CinepolisComponent } from './cine/cinepolis/cinepolis.component';


@NgModule({
  declarations: [
    AppComponent,
    TemperaturaComponent,
    MultiplicacionAbComponent,
    MenuComponent,
    CinepolisComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
