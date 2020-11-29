import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CodeDialogContentComponent } from './code-dialog-content.component';


@Component({
  selector: 'ha-code-dialog',
  templateUrl: './code-dialog.component.html',
  styleUrls: ['./code-dialog.component.css']
})
export class CodeDialogComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(CodeDialogContentComponent);
  }
}
