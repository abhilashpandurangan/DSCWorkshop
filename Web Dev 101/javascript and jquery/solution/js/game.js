
var p1Btn = document.getElementById("p1-btn");
var p2Btn = document.getElementById('p2-btn');
var p1Display=document.querySelector("#p1-card h1");
var p2Display=document.querySelector("#p2-card h1");
var score1=0;
var score2=0;
var gameOver=false;
var maxScore=10;
var music = new Howl({
  src: ['bubbles.mp3']
});
$('input').keypress(function(event){
  if(event.which===13){
    maxScore=Number($(this).val());
  }
})
p1Btn.addEventListener("click",function(){
  console.log(maxScore);
    if(!gameOver)
        score1++;
    if(score1===maxScore){
      gameOver=true;
      music.play();
      document.querySelector("#p1-card").style.background='linear-gradient(to right, #1d976c, #93f9b9)';
      p1Display.style.color='green';
      p2Display.style.color='maroon';
      document.querySelector("#p2-card").style.background='linear-gradient(to right, #ff9966, #ff5e62)';
    }
    p1Display.innerHTML=score1;
});
p2Btn.addEventListener("click",function(){
  if(!gameOver)
      score2++;
  if(score2===maxScore){
    gameOver=true;
    music.play();
    document.querySelector("#p2-card").style.background='linear-gradient(to right, #1d976c, #93f9b9)';
    p2Display.style.color='green';
    p1Display.style.color='maroon';
    document.querySelector("#p1-card").style.background='linear-gradient(to right, #ff9966, #ff5e62)';
  }
  p2Display.textContent=score2;
});
document.getElementById("reset").addEventListener("click",function(){
  score1=0;
  score2=0;
  gameOver=false;
  p1Display.textContent=score1;
  p2Display.textContent=score2;
  document.querySelector("#p1-card").style.background='linear-gradient(to top, #E9E4F0, #D3CCE3)';
  p1Display.style.color='#7866a5';
  p2Display.style.color='#7866a5';
  document.querySelector("#p2-card").style.background='linear-gradient(to top, #E9E4F0, #D3CCE3)';
})
