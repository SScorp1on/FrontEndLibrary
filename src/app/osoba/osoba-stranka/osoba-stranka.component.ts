import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Osoba, OsobaZoznam} from '../../models/osoba.model';
import {OsobaService} from '../osoba.service';

@Component({
  selector: 'app-osoba-stranka',
  templateUrl: './osoba-stranka.component.html',
  styleUrls: ['./osoba-stranka.component.css']
})
export class OsobaStrankaComponent implements OnInit {
  osoby: OsobaZoznam[] = [];

  osobaNaUpravu?: Osoba;

  constructor(private router: Router, private osobaService: OsobaService) { }

  ngOnInit(): void {
    this.refreshOsob();
  }

  refreshOsob(): void {
    this.osobaService.getOsoby().subscribe(data => {
      console.log('prislo:', data);
      this.osoby = data;
    });
  }

  chodSpat(): void {
    this.router.navigate(['']);
  }

  pridaj(osoba: Osoba): void {
    this.osobaService.createOsoba(osoba).subscribe(data => {
      console.log('prislo:', data);
      this.refreshOsob();
    });
  }

  uprav(osoba: Osoba): void {
    if(osoba.id !== undefined) {
      this.osobaService.updateOsoba(osoba.id, osoba).subscribe(data => {
        console.log('prislo:', data);
        this.refreshOsob();
      });
    }
  }

  upravZoZoznamu(osobaId: number): void {
    this.osobaService.getOsoby(osobaId).subscribe(data => {
      console.log('prislo:', data);
      this.osobaNaUpravu = data;
    });

  }

  zmazZoZoznamu(osobaId: number): void {
    this.osobaService.deleteOsoba(osobaId).subscribe(data => {
      this.refreshOsob();
    });
  }
}
