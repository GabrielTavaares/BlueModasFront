import { MatDialogModule } from '@angular/material/dialog';

import { IdentificationComponent } from './identification.component';
import { IdentificationRoutingModule } from './identification-routing.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxMaskModule } from 'ngx-mask';
import { ConfirmComponent } from './confirm/confirm.component';



@NgModule({
  declarations: [IdentificationComponent, ConfirmComponent],
  imports: [
    CommonModule,
    IdentificationRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatDatepickerModule,
    NgxMaskModule.forChild(),
    MatDialogModule
  ]
})
export class IdentificationModule { }
