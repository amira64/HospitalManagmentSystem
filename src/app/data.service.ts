export const STORAGE_KEY = 'appData';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})

export class DataService {
  doctors: any[] = [];
  patients: any[] = [];
  private storageKey = 'staffData';

  constructor() {
  }

  saveData(key: string,data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  getData(key: string): any {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  addDoctor(doctor: any) {
    doctor.id = this.generateUniqueId();
    this.doctors.push(doctor);
  }

  addPatient(patient: any) {
    patient.id = this.generateUniqueId();
    this.patients.push(patient);
  }

  getDoctors() {
    return this.doctors;
  }

  getDoctorById(id: number) {
    return this.doctors.find((doctor) => doctor.id === id);
  }

  updateDoctor(doctor: any) {
    const index = this.doctors.findIndex((d) => d.id === doctor.id);
    if (index !== -1) {
      this.doctors[index] = doctor;
    }
  }

  getPatients() {
    return this.patients;
  }

  getPatientById(id: number) {
    return this.patients.find((patient) => patient.id === id);
  }

  updatePatient(patient: any) {
    const index = this.patients.findIndex((p) => p.id === patient.id);
    if (index !== -1) {
      this.patients[index] = patient;
    }
  }

  private generateUniqueId(): number {
    return Date.now();
  }
}
