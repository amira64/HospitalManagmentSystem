import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageStaffComponent } from './manage-staff/manage-staff.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    DashboardComponent,
    ManageStaffComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AdministrativeAssistantModule { }
