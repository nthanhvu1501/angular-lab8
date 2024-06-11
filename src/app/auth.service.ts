import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../environments/environment';
import jwt_decode from 'jwt-decode';

@Injectable()
export class AuthService {
  private authUrl = environment.url;

  constructor(private http: HttpClient, private router: Router) {}

  register(user: any): Observable<any> {
    return this.http.post(`${this.authUrl}/register`, user);
  }

  login(user: any): Observable<any> {
    return this.http.post(`${this.authUrl}/login`, user).pipe(
      tap((res: any) => {
        localStorage.setItem('token', res.token);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  get isLoggedIn(): boolean {
    const token = this.getToken();
    if (token) {
      const decoded: any = jwt_decode(token);
      return decoded.exp > Date.now() / 1000;
    }
    return false;
  }

  hasRole(expectedRole: string): boolean {
    const token = this.getToken();
    if (token) {
      console.log(token);
      
      const decoded: any = jwt_decode(token);
      console.log("decoded:" , decoded);
      return decoded.user.role === expectedRole;
    }
    return false;
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getProfile(): Observable<any> {
    return this.http.get(`${this.authUrl}/profile`);
  }
}
