import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Answer } from '../shared/answer.interface';

import { PollService } from '../shared/poll.service';
import { Question } from '../shared/question.interface';
import { Respondent } from '../shared/respondent.interface';
import { RespondentsService } from '../shared/respondents.service';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {

  respondent: Respondent|null = null

  questions: Question[] = []

  unanswered: Question[] = []

  answeredQuestionIds: number[] = []

  answers: Answer[] = []

  code: string = ''

  pollNumber: string|null = null;

  placeOfResidence: number|null = null;

  value: string = ''

  prediction: any;

  constructor(route: ActivatedRoute, private respondentService: RespondentsService, private pollService: PollService) {
    this.code = route.snapshot.params['code'];
  }

  ngOnInit(): void {
    this.respondentService.findRepondent(this.code).subscribe(respondent => {
      this.respondent = respondent
      if (respondent.prediction) {
        this.prediction = JSON.parse(respondent.prediction)
      }
      this.pollService.getAllQuestions().subscribe(questions => {
        this.questions = questions
        this.respondentService.getAnswers(respondent.id).subscribe(answers => {
          this.answers = answers
          this.answeredQuestionIds = answers.map(a => a.question.id)
          this.unanswered = this.questions.filter(q => !this.answeredQuestionIds.includes(q.id))
        })
      })
    })
  }

  onSave(): void {
    let question = this.unanswered.shift()
    this.pollService.addAnswer({ value: this.value, question: { id: question?.id }, respondent: { id: this.respondent?.id }}).subscribe(a => {
      this.answers.push(a)
    })
    this.value = ''
  }

  createPrediction(): void {
    this.respondentService.createPrediction(this.respondent?.id as number).subscribe(prediction => {
      if (prediction) {
        (this.respondent as Respondent).prediction = prediction;
        this.prediction = prediction
      }
    })
  }
}
