
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const baseURL = 'http://127.0.0.1:8000/';

@Injectable()
export class JobserviceService {

  private httpOptions: any;

  constructor(private http: HttpClient) {
  }

  getHttpOptions(): any {
    this.httpOptions =  {
      headers: new HttpHeaders({
        'Accept': 'application/json'
      })
    };

    return this.httpOptions;
  }

  apply(firstName: string, surname: string, email: string, phone: string, coverLetter: string, passport: File, resume: File): Observable<any> {

    const url = baseURL + 'app/job';

    const formData: FormData = new FormData();
    formData.append('first_name', firstName);
    formData.append('surname', surname);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('cover_letter', coverLetter);
    formData.append('passport', passport, passport.name);
    formData.append('resume', passport, resume.name);

    return this.http.post<any>(url, formData, this.getHttpOptions());



  }

}
