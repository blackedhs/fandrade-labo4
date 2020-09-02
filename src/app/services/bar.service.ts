import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class BarService {

  public nombre$ = new EventEmitter<string>();

  constructor() { }
}
