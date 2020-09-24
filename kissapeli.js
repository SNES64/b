let taustakuva;
let kissakuva;
let kissa;
let lautan_leveys = 80;
let lautanY = 350;

let taustakuva_leveys = 800;
let taustakuva_korkeus = 400;


var kissalista =[];

function preload() {
  taustakuva = loadImage('https://igno.cc/opetus/kuvat/tausta.png')
    kissakuva = loadImage('https://igno.cc/opetus/kuvat/cat.png')
}

function setup() {
  var canvas = createCanvas(taustakuva_leveys, taustakuva_korkeus)
  kissa = new Kissa();
  luo_kissoja();
  angleMode(DEGREES);
}

function draw() {
  image(taustakuva, 0, 0, taustakuva_leveys, taustakuva_korkeus);

  luo_lautta();

kissalista.forEach((kiSSa,monesko) => {
  kissa.liikuta();
});

  kissa.liikuta();
}
function luo_lautta() {
  fill('rgb(185,242,255)');
  rect (mouseX, taustakuva_korkeus - 50, lautan_leveys, 30, 30, 20, 0, 0)
}



function luo_kissoja() {
  let uusi_kisu = new Kissa();
  kissalista.unshift(uusi_kisu);
  kissa_ajastin = setTimeout(luo_kissoja,2000);
}



class Kissa {
  constructor() {
    this.X = 30;
    this.Y = 200;
    this.leveys = 30000;
    this.korkeus = 1;
    this.Xnopeus = 2;
    this.Ynopeus = -2;
    this.kulma = 0;
  }
  liikuta() {
    image(kissakuva, this.X, this.Y, this.leveys, this.korkeus)
    this.X = this.X + this.Xnopeus;
    this.Ynopeus += 0.05; // p

    if (this.Y +this.korkeus / 2 > lautanY) {
      if (this.X > mouseX && this.X < mouseX + lautan_leveys) {
        this.Ynopeus = -abs(this.Ynopeus);
      }
    }
  this.Y += this.Ynopeus;

  this.kulma += 1;

  push();
  translate(this.X, this.Y);
  rotate(this.kulma);
  imageMode(CENTER);
  image(kissakuva, 0, 0, this.leveys, this.korkeus)
  pop();
  }
}
