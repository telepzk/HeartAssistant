import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Answer } from './answer.interface';

import { Poll } from './poll.interface';
import { Question } from './question.interface';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  constructor(private http: HttpClient) { }

  getAllPolls() : Observable<Poll[]> {
    return this.http.get<Poll[]>('api/v1/polls/all')
  }

  getAllQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>('api/v1/polls/questions')
  }

  addAnswer(answer: any): Observable<Answer> {
    return this.http.post<Answer>('api/v1/polls/answer', answer)
  }

  getStoragePollNumber() : string|null {
    return localStorage.getItem('pollNumber');
  }

  setStoragePollNumber(number: string) : void {
    localStorage.setItem('pollNumber', number);
  }

  removeStoragePollNumber() : void {
    localStorage.removeItem('pollNumber');
  }
}
