import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Persona } from 'src/app/clases/persona';

@Injectable({
  providedIn: 'root',
})
export class ConsumoApiService {
  constructor(private http: HttpClient) { }

  get(): Observable<Persona>{
   const url = 'https://api.mocki.io/v1/570c5e5c';
   return this.http.get<Persona>(url);
  }
}
