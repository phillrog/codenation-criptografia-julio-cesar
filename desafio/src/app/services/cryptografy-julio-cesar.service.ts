import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cryptografy } from '../models/cryptografy.model';
import { RequestOptions} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class CryptografyJulioCesarService {

  constructor(private http: HttpClient) { }

  getEncryptedText(): Observable<Cryptografy> {
    const url = `${environment.url}v1/challenge/dev-ps/generate-data?token=445c84e524b629777a8fb14c748b397d0d4e7e08`;
    return this.http.get<Cryptografy>(url);

  }

  postDecryptedText(challenge: any): Observable<any> {
    const url = `${environment.url}v1/challenge/dev-ps/submit-solution?token=445c84e524b629777a8fb14c748b397d0d4e7e08`;

    const formData = new FormData();

    formData.append('answer', challenge ,'answer.json');
    const headers = new HttpHeaders({ 'enctype': 'multipart/form-data' });


    return this.http.post<any>(url, formData,{ observe: 'body' , headers: headers});

  }

}
