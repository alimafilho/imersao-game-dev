class Personagem{
  constructor(imagem){
    this.imagem = imagem;
    this.matriz = this.calc(220, 270, 4, 4);
    this.frameAtual = 0;
  }

  calc(largura, altura, colunas, linhas) {
    let matriz = [];
    for(let i=0; i < linhas; i++) {
      for(let j=0; j < colunas; j++) {
        matriz.push([j*largura, i*altura]);
      } 
    }
    return matriz;
  }
  
  exibe(){
    image(this.imagem, 0, height-135, 110, 130, this.matriz[this.frameAtual][0], this.matriz[this.frameAtual][1], 220, 270);
    
    this.anima();
  }
  
  anima() {
    if (this.frameAtual < this.matriz.length -1) {
      this.frameAtual++
    } else {
      this.frameAtual = 0;
    }
    
  }
}