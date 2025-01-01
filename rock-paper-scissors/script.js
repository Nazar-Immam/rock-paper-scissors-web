let player_score = 0 ;
let ai_score = 0 ;

const choices= ["Rock", "Paper", "Scissor"] ;

function getAIchoice(){
    const randomIndex=  Math.floor(Math.random()* choices.length) ;
    return choices[randomIndex] ;
}

function determineWinner(player_choice, ai_choice){
    if(player_choice===ai_choice){
        return "It's a tie !" ;
    } 
    else if( (player_choice==="Rock" && ai_choice==="Scissors") || 
             (player_choice==="Scissors" && ai_choice==="Paper")||
             (player_choice==="Paper" && ai_choice==="Rock")){
                player_score++ ;
                return "You Win!" ;
             }
    else {
        ai_score++ ;
        return "AI Wins!" ;
    }
}

function playGame(player_choice){
    const ai_choice= getAIchoice();
    const resultMessage= determineWinner(player_choice, ai_choice) ;

    document.getElementById("result-text").textContent = `AI Chose ${ai_choice}. ${resultMessage}`;
    document.getElementById("player_score").textContent= player_score;
    document.getElementById("ai_score").textContent= ai_score ;
}
    //event listeners for the buttons

    document.getElementById("rock").addEventListener("click",() => playGame("Rock"));
    document.getElementById("paper").addEventListener("click",() => playGame("Paper")) ;
    document.getElementById("Scissor").addEventListener("click", () => playGame("Scissor"));
