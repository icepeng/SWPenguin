import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { RuneService } from '../rune.service';

@Component({
  selector: 'app-file-upload-dialog',
  templateUrl: './file-upload-dialog.component.html',
  styleUrls: ['./file-upload-dialog.component.css']
})
export class FileUploadDialogComponent implements OnInit {

  listner: any;

  constructor(public dialogRef: MdDialogRef<FileUploadDialogComponent>) { }

  ngOnInit() {
  }

  fileChange(event): void {
      this.listner = event.target;
  }

  fileRead(): void {
    var file: File = this.listner.files[0];
    var myReader: FileReader = new FileReader();

    myReader.onloadend = () => {
      // you can perform an action with readed data here
      console.log(JSON.parse(myReader.result));
      this.dialogRef.close('success');
    }

    myReader.readAsText(file);
  }
}
