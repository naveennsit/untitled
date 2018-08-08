import {Component} from '@angular/core';
import {UploadService} from './upload/upload.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'untitled';
  progress: number;
  showProgressBar: boolean = false;
  selectedFile = null;

  constructor(private uploadService: UploadService) {

  }

  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
    this.progress = 0;
    this.showProgressBar = true;
  }

  uploadImage() {
    this.uploadService.uploadAndProgressSingle(this.selectedFile).subscribe((data) => {
      this.progress = data;
    }, () => {


    }, () => {
      console.log('complete');
      this.selectedFile = null;
      this.progress = null;
      this.showProgressBar = false;
    });
  }
}
