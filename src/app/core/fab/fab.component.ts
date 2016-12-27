import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { FileUploadDialogComponent } from '../file-upload-dialog/file-upload-dialog.component';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.css']
})
export class FabComponent implements OnInit {

  constructor(public dialog: MdDialog) { }

  ngOnInit() {
  }

  openDialog() {
    let dialogRef = this.dialog.open(FileUploadDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

}
