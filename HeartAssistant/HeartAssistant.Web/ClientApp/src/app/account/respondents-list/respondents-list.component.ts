import { Component, Input, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Respondent } from 'src/app/shared/respondent.interface';

@Component({
  selector: 'ha-respondents-list',
  templateUrl: './respondents-list.component.html',
  styleUrls: ['./respondents-list.component.css']
})
export class RespondentsListComponent implements OnInit {
  displayedColumns = ['id', 'code']

  dataSource = new MatTableDataSource<Respondent>()

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @Input() set respondents(value: Respondent[]) {
    this.dataSource = new MatTableDataSource<Respondent>(value)
    this.dataSource.paginator = this.paginator;
  }

  constructor() { }

  ngOnInit(): void { }
}
