import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { EditDoctorComponent } from './edit-doctor/edit-doctor.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DoctorListComponent,
    EditDoctorComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DoctorsModule { }
