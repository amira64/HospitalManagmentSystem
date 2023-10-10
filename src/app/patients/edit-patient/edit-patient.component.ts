import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { STORAGE_KEY } from 'src/app/data.service';



@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent  implements OnInit {
  
  patient: any = {};

  constructor(private route: ActivatedRoute,private router: Router,private dataService: DataService) {}

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      const patientId = +idParam;
      this.patient = this.dataService.getPatientById(patientId);
    }
  }
  

  onSubmit() {
    this.dataService.updatePatient(this.patient);
    this.dataService.saveData(STORAGE_KEY, { patients: this.dataService.getPatients() });
    this.patient={};
    this.router.navigate(['./patient-list']);
  }
}
