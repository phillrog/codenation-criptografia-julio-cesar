import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CryptografyJulioCesarService {

  constructor(private http: HttpClient) { }

  getEncryptedText(): Observable<any> {
    const url = `${environment.url}v1/challenge/dev-ps/generate-data?token=445c84e524b629777a8fb14c748b397d0d4e7e08`
    return this.http.get(url);

  }

}
