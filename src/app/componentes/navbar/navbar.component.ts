import { Component, OnInit } from '@angular/core';
import { BarService } from 'src/app/services/bar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  nombre: string;
  constructor(public event: BarService) { }

  ngOnInit(): void {
    this.event.nombre$.subscribe( texto => this.nombre = texto);
  }
}
