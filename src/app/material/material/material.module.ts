import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule} from '@angular/material/radio';


@NgModule({
  declarations: [],
  exports : [
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatRadioModule,
    MatIconModule
  ],
  imports: [
    CommonModule,

  ]
})
export class MaterialModule { }
  