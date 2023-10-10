import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './administrative-assistant/dashboard/dashboard.component';
import { DoctorListComponent } from './doctors/doctor-list/doctor-list.component';
import { PatientListComponent } from './patients/patient-list/patient-list.component';
import { ManageStaffComponent } from './administrative-assistant/manage-staff/manage-staff.component';
import { EditDoctorComponent } from './doctors/edit-doctor/edit-doctor.component';
import { EditPatientComponent } from './patients/edit-patient/edit-patient.component';

const routes: Routes = [
  { path: 'admin', loadChildren: () => import('./administrative-assistant/administrative-assistant.module').then(m => m.AdministrativeAssistantModule) },
  {
    path: 'doctors',
    loadChildren: () => import('./doctors/doctors.module').then(m => m.DoctorsModule),
  },
  {
    path: 'patients',
    loadChildren: () => import('./patients/patients.module').then(m => m.PatientsModule),
  },
  { path: 'doctors/list', component: DoctorListComponent },
  { path: 'patients/list', component: PatientListComponent },
  { path: 'admin/dashboard', component: DashboardComponent },
  { path: 'admin/manage-staff', component: ManageStaffComponent },
  { path: 'doctors/edit-doctor/:id', component: EditDoctorComponent },
  { path: 'patients/edit-patient/:id', component: EditPatientComponent },
  { path: '', redirectTo: 'admin/dashboard', pathMatch: 'full' },
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
