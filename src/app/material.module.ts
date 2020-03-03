import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatBottomSheetRef, MatBottomSheet, MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatOptionModule} from "@angular/material/core";
import {MatSortModule} from "@angular/material/sort";
import {MatTableModule} from "@angular/material/table";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatStepperModule} from "@angular/material/stepper";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [],
  providers: [
    { provide: MatBottomSheetRef, useValue: {} },
    { provide: MatBottomSheet, useValue: {} },
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MatTableModule,
    MatStepperModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    MatBottomSheetModule
  ]
})
export class MaterialModule { }
