import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientListComponent } from './patient-list/patient-list.component';
import { EditPatientComponent } from './edit-patient/edit-patient.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PatientListComponent,
    EditPatientComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PatientsModule { }
