import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MatSortModule } from '@angular/material/sort';
const MATERIAL_MODULES = [
MatIconModule,
MatSnackBarModule,
MatCardModule,
MatRippleModule,
MatSortModule,
MatFormFieldModule,
MatIconModule,
MatSnackBarModule,
MatDialogModule,
MatToolbarModule,
MatPaginatorModule,
MatTableModule,
MatFormFieldModule,
MatInputModule,
MatSidenavModule,
MatListModule,
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MATERIAL_MODULES
  ],
  exports: [
    MATERIAL_MODULES
  ]
})
export class MaterialModule { }
