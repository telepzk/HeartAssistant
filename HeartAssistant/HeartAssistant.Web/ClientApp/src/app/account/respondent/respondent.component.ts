import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Answer } from 'src/app/shared/answer.interface';
import { Respondent } from 'src/app/shared/respondent.interface';
import { RespondentsService } from 'src/app/shared/respondents.service';

@Component({
  selector: 'app-respondent',
  templateUrl: './respondent.component.html',
  styleUrls: ['./respondent.component.css']
})
export class RespondentComponent implements OnInit {

  id: number = 0
  respondent: Respondent | null = null
  answers: Answer[] = []
  prediction: any;

  constructor(route: ActivatedRoute, private respondentService: RespondentsService) {
    this.id = route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.respondentService.getRespondent(this.id).subscribe(respondent => {
      this.respondent = respondent
      if (respondent.prediction) {
        this.prediction = JSON.parse(respondent.prediction)
      }
    })
    this.respondentService.getAnswers(this.id).subscribe(answers =>{
      this.answers = answers
    })
  }

  predict(): void {
    this.respondentService.createPrediction(this.id).subscribe(prediction => {
      if (prediction) {
        (this.respondent as Respondent).prediction = prediction;
        this.prediction = prediction
      }
    })
  }
}
