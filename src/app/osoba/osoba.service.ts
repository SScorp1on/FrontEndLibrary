import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Osoba, OsobaZoznam} from '../models/osoba.model';

@Injectable({
  providedIn: 'root'
})
export class OsobaService {

  private apiUrl = 'http://labs.fpv.umb.sk:8080/api/customers';

  constructor(private http: HttpClient) { }

  getOsoby(): Observable<OsobaZoznam[]> {
    return this.http.get<OsobaZoznam[]>(`${this.apiUrl}`);
  }

  getOsoba(osobaId: number): Observable<Osoba> {
    return this.http.get<Osoba>(`${this.apiUrl}/${osobaId}`);
  }

  createOsoba(osoba: Osoba): Observable<Osoba> {
    return this.http.post<Osoba>(`${this.apiUrl}`, {firstname: osoba.meno, lastname: osoba.priezvisko});
  }
  updateOsoba(osobaId: number,osoba: Osoba): Observable<Osoba> {
    return this.http.put<Osoba>(`${this.apiUrl}/${osobaId}`, {firstname: osoba.meno, lastname: osoba.priezvisko});
  }
  deleteOsoba(osobaId: number): Observable<void> {
  return this.http.get<void>(`${this.apiUrl}/${osobaId}`);
}
}
