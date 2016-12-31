import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { RuneService } from '../rune.service';

@Component({
  selector: 'app-file-upload-dialog',
  templateUrl: './file-upload-dialog.component.html',
  styleUrls: ['./file-upload-dialog.component.css']
})
export class FileUploadDialogComponent implements OnInit {

  listener: any;

  constructor(
    public dialogRef: MdDialogRef<FileUploadDialogComponent>,
    public runeService: RuneService
  ) { }

  ngOnInit() {
  }

  fileChange(event): void {
    this.listener = event.target;
  }

  fileRead(): void {
    var file: File = this.listener.files[0];
    var myReader: FileReader = new FileReader();

    myReader.onloadend = () => {
      this.runeService.import(JSON.parse(myReader.result));
      this.dialogRef.close('success');
    }

    myReader.readAsText(file);
  }
}
