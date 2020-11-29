import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/shared/patient.model';
import { PatientService } from 'src/app/shared/patient.service';

@Component({
  selector: 'ha-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'surname'];
  patients: Patient[] = []

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.patientService.getAllPatients().subscribe(patients => {
      this.patients = patients
    })
  }

}
