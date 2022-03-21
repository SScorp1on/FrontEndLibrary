export class Kniha {

  id?: string;
  nazovKnihy: string;
  autor: string;

  constructor(kniha: Kniha) {
    this.id = kniha.id;
    this.nazovKnihy = kniha.nazovKnihy;
    this.autor = kniha.autor;
  }

}
