import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { STORAGE_KEY } from 'src/app/data.service';



@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  constructor(private dataService: DataService,private router:Router) {}

  patients: any[] = [];
  private storageKey = 'patientsData';
 
  ngOnInit() {
    this.loadPatientsFromStorage();
  }

  loadPatientsFromStorage() {
    const storedData = this.dataService.getData(STORAGE_KEY);
    if (storedData && storedData.patients) {
      this.patients = storedData.patients;
    }
  }

  saveData() {
    const data = { patients: this.patients };
    this.dataService.saveData(STORAGE_KEY, data);
  }

  addPatient(name: string) {
    const patientId = this.generateUniqueId();
    const newPatient = { id: patientId, name };
    this.patients.push(newPatient);
    this.saveData();
  }

  private generateUniqueId() {
    return Math.floor(Math.random() * 1000000);
  }

  private savePatientsToLocalStorage() {
    localStorage.setItem('patients', JSON.stringify(this.patients));
  }

  editPatient(patientId: number) {
    this.router.navigate(['patients/edit-patient/:id', patientId]);
  }

  deletePatient(patient: any) {
    const index = this.patients.indexOf(patient);
    if (index !== -1) {
      this.patients.splice(index, 1);
      console.log('Deleting patient:', patient);
    }
  }
}
