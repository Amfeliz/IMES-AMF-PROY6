function setup() {
  createCanvas(600, 400);
}

function draw() {
  
  
   if(mouseIsPressed==true){
     stroke(mouseX, 0, mouseY);
     strokeWeight(11);
     point(mouseX-5, mouseY-5);
     point(mouseX*-1+600, mouseY-5);
     point(mouseX*-1+600, mouseY*-1+400)
     point(mouseX-5, mouseY*-1+400)  
   }

  let fondoMusical;  // Variable para almacenar el sonido de fondo

function preload() {
  // Carga el archivo de música
  fondoMusical = loadSound('Duvet.mp3');
}

function setup() {
  createCanvas(400, 400);  // Tamaño del lienzo
  // Botón para reproducir la música
  let playButton = createButton('Reproducir');
  playButton.mousePressed(reproducirMusica);
  
  // Botón para detener la música
  let stopButton = createButton('Detener');
  stopButton.mousePressed(detenerMusica);
}

function draw() {
  // Tu código de dibujo va aquí
}

function reproducirMusica() {
  // Reproduce la música
  fondoMusical.play();
}

function detenerMusica() {
  // Detiene la música
  fondoMusical.stop();
}
  