let randomNumber = Math.trunc(Math.random()*6+1);
let score = 20;
let highscore=0;
console.log(randomNumber);
document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);
    if(!guess){
        document.querySelector('.message').textContent= "NO NUMBER......"
    }
    else{
        console.log(guess);
        if(guess===randomNumber){
            document.querySelector('.message').textContent= "YOU HAVE WON";
            document.querySelector('.number').textContent= randomNumber;
            document.querySelector('.number').style.width ='200px';
            document.querySelector('body').style.backgroundColor= "green";
            if(score>highscore){
                 highscore=score;
                 document.querySelector('.highscore').textContent=highscore;
            }
        }else if(guess>randomNumber){
            if(score>1){
            document.querySelector('.message').textContent= "TOO HIGH";
            score--;
            document.querySelector('.score').textContent=score;
            }else{
              document.querySelector('.score').textContent = 0;
              document.querySelector('.message').textContent= "YOU HAVE LOST";  
              document.querySelector('body').style.backgroundColor= "red";
            }
        }else if(guess<randomNumber){
            if(score>1){
            document.querySelector('.message').textContent= "TOO LOW";
            score--;
            document.querySelector('.score').textContent=score;
            }else{
              document.querySelector('.score').textContent = 0;
              document.querySelector('.message').textContent= "YOU HAVE LOST";
              document.querySelector('body').style.backgroundColor= "red";  
            }
    }
    }
})
document.querySelector('.again').addEventListener('click',function(){
    document.querySelector('.message').textContent="start guessing......";
    score=20;
    document.querySelector('.score').textContent = 20;
    document.querySelector('.number').textContent="?";
    document.querySelector('body').style.backgroundColor= "white";


})