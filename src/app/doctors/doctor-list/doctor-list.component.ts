import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { STORAGE_KEY } from 'src/app/data.service';




@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit{

  constructor(private router: Router,private dataService: DataService) {}

  doctors: any[] = [];
  private storageKey = 'doctorsData';

  ngOnInit() {
    this.loadDoctorsFromStorage();
  }

  loadDoctorsFromStorage() {
    const storedData = this.dataService.getData(STORAGE_KEY);
    if (storedData && storedData.doctors) {
      this.doctors = storedData.doctors;
    }
  }

  saveData() {
    const data = { doctors: this.doctors };
    this.dataService.saveData(STORAGE_KEY, data);
  }
 
  addDoctor(name: string) {
    const doctorId = this.generateUniqueId();
    const newDoctor = { id: doctorId, name };
    this.doctors.push(newDoctor);
    this.saveData();
  }

  private generateUniqueId() {
    return Math.floor(Math.random() * 1000000);
  }


  private saveDoctorsToLocalStorage() {
    localStorage.setItem('doctors', JSON.stringify(this.doctors));
  }

  editDoctor(doctorId: number) {
    this.router.navigate(['doctors/edit-doctor', doctorId]);
  }

  deleteDoctor(doctor: any) {
    const index = this.doctors.indexOf(doctor);
    if (index !== -1) {
      this.doctors.splice(index, 1);
    }
    console.log('Deleting doctor:', doctor);
  }
}
