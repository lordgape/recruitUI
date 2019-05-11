import { Component } from '@angular/core';
import {JobserviceService} from "./jobservice.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Adio Consultancy';

  constructor(private _jobService: JobserviceService) {

  }

  handleFileInput(files: FileList) {

  }
}
