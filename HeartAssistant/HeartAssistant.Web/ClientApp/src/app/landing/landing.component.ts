import { Component, OnInit } from '@angular/core';
import { PollService } from '../shared/poll.service';

@Component({
  selector: 'ha-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  pollNumber: string|null = null;

  constructor(private pollService: PollService) { }

  ngOnInit(): void {
    this.pollNumber = this.pollService.getStoragePollNumber();
  }

}
