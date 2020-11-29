import { Component, Input, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Answer } from 'src/app/shared/answer.interface';

@Component({
  selector: 'ha-answers-list',
  templateUrl: './answers-list.component.html',
  styleUrls: ['./answers-list.component.css']
})
export class AnswersListComponent implements OnInit {

  displayedColumns = ['id', 'question', 'value']

  dataSource = new MatTableDataSource<Answer>()

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @Input() set answers(value: Answer[]) {
    this.dataSource = new MatTableDataSource<Answer>(value)
    this.dataSource.paginator = this.paginator;
  }

  constructor() { }

  ngOnInit(): void { }
}
