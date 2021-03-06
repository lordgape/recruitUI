import { Component } from '@angular/core';
import {JobserviceService} from "./jobservice.service";
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Adio Consultancy';

  passportToUpload: File = null;
  resumeToUpload: File = null;

  constructor(private jobService: JobserviceService) {

  }

  handlePassportInput(files: FileList) {

    this.passportToUpload = files.item(0);

    let allowedTypes = ['image/jpeg'];




  }



  handleResumeInput(files: FileList) {

    this.resumeToUpload = files.item(0);


  }

  applyForRole() {


    let firstname =  $("#first_name").val();

    let surname =  $("#surname").val();

    let email =  $("#email").val();

    let phone =  $("#phone").val();

    let cover_letter =  $("#cover_letter").val();

    this.jobService.apply(firstname, surname, email, phone, cover_letter, this.passportToUpload, this.resumeToUpload).subscribe(
        resp => {

          // Remove on production
          console.log(resp);

        },
        error => {

          // Remove on production
         console.log(error);

        },
        () => {
          // 'onCompleted' callback.
          console.log('done');
        });
  }
}
