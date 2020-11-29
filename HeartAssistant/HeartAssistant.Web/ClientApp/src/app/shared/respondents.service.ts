import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Answer } from './answer.interface';
import { Respondent } from './respondent.interface';

@Injectable({
  providedIn: 'root'
})
export class RespondentsService {

  constructor(private http: HttpClient) { }

  getAllRespondents(): Observable<Respondent[]> {
    return this.http.get<Respondent[]>('api/v1/respondents/all')
  }

  getRespondent(id: number): Observable<Respondent> {
    return this.http.get<Respondent>('api/v1/respondents/' + id)
  }

  findRepondent(code: string): Observable<Respondent> {
    return this.http.get<Respondent>('api/v1/respondents/find/' + code)
  }

  getAnswers(id: number): Observable<Answer[]> {
    return this.http.get<Answer[]>('api/v1/respondents/answers/' + id)
  }

  createPrediction(id: number): Observable<any> {
    return this.http.get<any>('api/v1/respondents/predict/' + id)
  }
}
