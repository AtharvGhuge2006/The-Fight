class Form{
constructor(){
   // this.button = createButton('Next')
   // this.title=createElement('h1')

}
getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })}
  intro(){
      if(intro_display==false){
    let txtH = 48;
    let txtW = textWidth(txt);
    let spacing = txtW / txt.length;
      
    for(let i = 0; i < txt.length; i++){
      let c = txt.charAt(i);
      
      let offsetX = random(-spacing / 10.0, spacing / 10.0);
      let offsetY = random(-spacing / 10.0, spacing / 10.0);
          
      let startX = (width - txtW) / 2 + spacing / 2;
      let y = height / 2; //  + textHeight / 2;
      text(c, startX + i * spacing + offsetX, y + offsetY);
    }
    textSize(16);
    for (var i = 0; i < seaRoseLines.length; i++) {
    fill(128+(i*10));
    text(seaRoseLines[i], 50, 50+i*20);
  }}
  this.button.position(displayWidth/2 + 30, displayHeight/2);
  this.button.mousePressed(()=>{
     var intro_display=true
    this.button.hide();
})
}
}