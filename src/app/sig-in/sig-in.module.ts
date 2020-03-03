import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { SigINPageRoutingModule } from './sig-in-routing.module';

import { SigINPage } from './sig-in.page';
import { MaterialModule } from '../material.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SigINPageRoutingModule,
    MaterialModule
  ],
  declarations: [SigINPage]
})
export class SigINPageModule {}
