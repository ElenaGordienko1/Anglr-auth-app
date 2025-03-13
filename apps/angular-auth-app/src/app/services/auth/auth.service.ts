import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseApiUrl = 'https://www.vl.ru/authtestcase';

  constructor(private http: HttpClient) {}

  login(payload: { email: string; password: string }): Observable<any> {
    const fd = new FormData();
    fd.append('email',payload.email);
    fd.append('password',payload.password);
    return this.http.post(`${this.baseApiUrl}/signin`, fd);
  }
}
