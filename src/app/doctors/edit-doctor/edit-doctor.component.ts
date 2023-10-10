import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { STORAGE_KEY } from 'src/app/data.service';

@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.css']
})
export class EditDoctorComponent implements OnInit {
  doctor: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      const doctorId = +idParam;
      this.doctor = this.dataService.getDoctorById(doctorId);
    }
  }

  onSubmit() {
    this.dataService.updateDoctor(this.doctor);
    this.dataService.saveData(STORAGE_KEY, { doctors: this.dataService.getDoctors() });
    this.doctor={};
    this.router.navigate(['/doctor-list']);
  }
}
