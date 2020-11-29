import { Component, OnInit } from '@angular/core';

import { Poll } from 'src/app/shared/poll.interface';
import { PollService } from 'src/app/shared/poll.service';

@Component({
  selector: 'app-polls',
  templateUrl: './polls.component.html',
  styleUrls: ['./polls.component.css']
})
export class PollsComponent implements OnInit {

  polls: Poll[] = []

  constructor(private pollService: PollService) { }

  ngOnInit(): void {
    this.pollService.getAllPolls().subscribe(polls => {
      this.polls = polls
    })
  }

}
