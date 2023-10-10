import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { STORAGE_KEY } from 'src/app/data.service';

@Component({
  selector: 'app-manage-staff',
  templateUrl: './manage-staff.component.html',
  styleUrls: ['./manage-staff.component.css']
})
export class ManageStaffComponent {
    staffName: string = '';
    staffPosition: string = '';
    speciality:string='';
  patientAge: number = 0;
  experienceYears:number=0;
  nationality:string='';
  pnationality:string='';
  pSickName:string='';
    constructor(private dataservice:DataService) {}
  
    onSubmit() {
      if (this.staffPosition === 'Doctor') {
        const doctor = {
          name: this.staffName,
          position: this.staffPosition,
          speciality: this.speciality,
          experienceYears: this.experienceYears,
          nationality: this.nationality,
        };
        this.dataservice.addDoctor(doctor);
      } else if (this.staffPosition === 'Patient') {
        const patient = {
          name: this.staffName,
          position: this.staffPosition,
          age: this.patientAge,
          pnationality: this.pnationality,
          pSickName:this.pSickName,
          
        };
        this.dataservice.addPatient(patient);
      }
      const data = {
        doctors: this.dataservice.getDoctors(),
        patients: this.dataservice.getPatients(),
      };

      this.dataservice.saveData(STORAGE_KEY,data);
      this.staffName = '';
      this.staffPosition = '';
      this.speciality = '';
      this.nationality='';
      this.patientAge = 0; 
      this.pnationality='';
      this.pSickName='';
    }
    
  }