 export class Photo {
    img: string ;
    desciption: string;
    locked: boolean;
  
    constructor() {
      this.locked = true;
      this.img= "https://picsum.photos/200/200";
      this.desciption= "../assets/candado.png";
    }
    get image(){
        return this.locked ? "/assets/bloquear.png" :"https://picsum.photos/200/200";
    }
    
    chageLock(){
        this.locked = !this.locked;
    }
  }