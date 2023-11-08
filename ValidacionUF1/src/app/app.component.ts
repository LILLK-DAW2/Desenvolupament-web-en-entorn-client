import {Component} from '@angular/core';
import {Personaje} from "./Personaje";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverCharacters: Personaje[] = [];
  paragrafo: string = "vacio"
  serverJson:string = `[
      {"name": "Jugger", "strength": 18, "agility": 12, "intelligence": 6, "life": 30, "stat6":8,"stat7":8,"stat8":8},
      {"name": "Pelegrin", "strength": 20, "agility": 8, "intelligence": 6, "life": 40,"stat6":8,"stat7":8,"stat8":8},
      {"name": "Dorthak", "strength": 12, "agility": 18, "intelligence": 10, "life": 16,"stat6":8,"stat7":8,"stat8":8},
      {"name": "Kharak", "strength": 8, "agility": 20, "intelligence": 12, "life": 14, "stat6":8,"stat7":8,"stat8":8},
      {"name": "Perz", "strength": 10, "agility": 6, "intelligence": 20, "life": 10, "stat6":8,"stat7":8,"stat8":8}
    ]`;
  constructor() {
    // Parseamos la información y la convertimos directamente en un array de "Personaje"
    this.serverCharacters = JSON.parse(this.serverJson);
  }
  editar(i: number) {
    let nombres: string[] = ['Dacaho2', 'Dacaho3', 'Dacaho4', 'Dacaho5', 'Dacaho6', 'Dacaho7', 'Dacaho8', 'Dacaho9', 'Dacaho10', 'Dacaho1'];
    this.serverCharacters[i].name = nombres[Math.floor(Math.random() * nombres.length)];
    this.serverCharacters[i].strength = Math.floor(Math.random() * (15 - 3 + 1));
    this.serverCharacters[i].agility = Math.floor(Math.random() * (15 - 3 + 1));
    this.serverCharacters[i].intelligence = Math.floor(Math.random() * (15 - 3 + 1));
    this.serverCharacters[i].life = Math.floor(Math.random() * (15 - 3 + 1));
    this.serverCharacters[i].stat6 = Math.floor(Math.random() * (15 - 3 + 1));
    this.serverCharacters[i].stat7 = Math.floor(Math.random() * (15 - 3 + 1));
    this.serverCharacters[i].stat8 = Math.floor(Math.random() * (15 - 3 + 1));
    this.mostrar(i);
  }
  reiniciar(i:number){
    // Parseamos la información y la convertimos directamente en un array de "Personaje"
    let tempserverCharacters: Personaje[] = JSON.parse(this.serverJson);
    this.serverCharacters[i].name = tempserverCharacters[i].name;
    this.serverCharacters[i].strength = tempserverCharacters[i].strength;
    this.serverCharacters[i].agility = tempserverCharacters[i].agility;
    this.serverCharacters[i].intelligence = tempserverCharacters[i].intelligence;
    this.serverCharacters[i].life = tempserverCharacters[i].life;
    this.serverCharacters[i].stat6 = tempserverCharacters[i].stat6;
    this.serverCharacters[i].stat7 = tempserverCharacters[i].stat7;
    this.serverCharacters[i].stat8 = tempserverCharacters[i].stat8;
    this.mostrar(i);
  }
  mostrar(i:number){
    this.paragrafo = `{"name":"${this.serverCharacters[i].name}","strength":${this.serverCharacters[i].strength},
      "agility":${this.serverCharacters[i].agility},"intelligence":${this.serverCharacters[i].intelligence},
      "life":${this.serverCharacters[i].life},"stat6":${this.serverCharacters[i].stat6},"stat7":${this.serverCharacters[i].stat7},"stat8":${this.serverCharacters[i].stat8}  `;
  }
}




