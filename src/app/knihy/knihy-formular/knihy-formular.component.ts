import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Kniha} from "../../models/kniha.model";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-knihy-formular',
  templateUrl: './knihy-formular.component.html',
  styleUrls: ['./knihy-formular.component.css']
})
export class KnihyFormularComponent {

  @Input()
  set osoba(data: Kniha | undefined){
    if(data){
      this.naplnForm(data)
    }
  }

  @Output()
  pridajKnihu = new EventEmitter<Kniha>();
  @Output()
  upravKnihu = new EventEmitter<Kniha>();

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      id: new FormControl(null),
      nazovKnihy: new FormControl(null),
      autor: new FormControl(null)
    });
  }

  private naplnForm(kniha: Kniha): void {

    this.form.controls['id'].setValue(kniha.id);
    this.form.controls['nazovKnihy'].setValue(kniha.nazovKnihy);
    this.form.controls['autor'].setValue(kniha.autor);
  }

  public pridaj(): void {
    this.pridajKnihu.emit({id: Math.random().toString(),nazovKnihy: this.form.value.nazovKnihy, autor: this.form.value.autor});
    this.form.reset();
  }

  public uprav(): void {
    this.upravKnihu.emit(this.form.value);
    this.form.reset();
  }

  public zrus(): void {
    this.form.reset();
  }


}
