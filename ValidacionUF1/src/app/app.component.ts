import {Component} from '@angular/core';
import { Photo } from './photos';


@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

photos: Photo[]= [new Photo(),new Photo(),new Photo(),new Photo()];

getCandaoImagen(foto: Photo): string {
  return foto.locked ? "assets/bloquear.png" : "assets/candado.png";
}

 
}



