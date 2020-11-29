import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Patient } from './patient.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }

  getAllPatients() : Observable<Patient[]> {
    return this.http.get<Patient[]>('api/v1/patient/all')
  }
}
