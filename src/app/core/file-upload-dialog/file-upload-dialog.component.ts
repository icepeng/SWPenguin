import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-file-upload-dialog',
  templateUrl: './file-upload-dialog.component.html',
  styleUrls: ['./file-upload-dialog.component.css']
})
export class FileUploadDialogComponent implements OnInit {

  constructor(public dialogRef: MdDialogRef<FileUploadDialogComponent>) { }

  ngOnInit() {
  }

}
