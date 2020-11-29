import { Component, OnInit } from '@angular/core';
import { Respondent } from 'src/app/shared/respondent.interface';
import { RespondentsService } from 'src/app/shared/respondents.service';

@Component({
  selector: 'app-respondents',
  templateUrl: './respondents.component.html',
  styleUrls: ['./respondents.component.css']
})
export class RespondentsComponent implements OnInit {

  loading = true

  respondents: Respondent[] = []

  constructor(private respondentsService: RespondentsService) { }

  ngOnInit(): void {
    this.respondentsService.getAllRespondents().subscribe(respondents => {
      this.respondents = respondents
      this.loading = false
    })
  }

}
