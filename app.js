const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const ROCKBTN = document.getElementById("rock");
const PAPERBTN = document.getElementById("paper");
const SCISSORSBTN = document.getElementById("scissors");
const RESULTEXT = document.getElementById("start-text");
const USERIMAGE = document.getElementById("user-image");
const MACHINEIMAGE = document.getElementById("machine-image");

const TIE = 0;
const WIN = 1;
const LOST = 2;

ROCKBTN.addEventListener("click", () =>{
    playgame(ROCK);
});

PAPERBTN.addEventListener("click", () =>{
    playgame(PAPER);
});

SCISSORSBTN.addEventListener("click", () =>{
    playgame(SCISSORS);
});

function calcResult(userOption, machineOption){
    if(userOption === machineOption){
        return TIE;
    
    } else if (userOption === ROCK){
        if (machineOption === PAPER) return LOST;
        if (machineOption === SCISSORS) return WIN;
    
    } else if (userOption === PAPER){    
        if (machineOption === SCISSORS) return LOST;
        if (machineOption === ROCK) return WIN;
    
    } else if (userOption === SCISSORS){
        if(machineOption === ROCK) return LOST;
        if (machineOption === PAPER) return WIN;
    } 
}

function playgame(userOption){
    USERIMAGE.src="img/"+userOption+".png";

    RESULTEXT.innerHTML = "Machine is thinking and chossing!";

    const INTERVAL = setInterval(function(){
        const machineOption = calcMachineOption();
        MACHINEIMAGE.src="img/"+machineOption+".png";
    }, 200);
    
    
    setTimeout(function() {

        clearInterval(INTERVAL);
        const machineOption = calcMachineOption();
        const result = calcResult(userOption, machineOption);
    
        MACHINEIMAGE.src="img/"+machineOption+".png";

        switch(result){
            case TIE:
                RESULTEXT.innerHTML = "You have tied"
                break;
            case WIN:
                RESULTEXT.innerHTML = "You have win"
                break;
            case LOST:
                RESULTEXT.innerHTML = "You have lost"
                break;
        }
    }, 2000);

}

function calcMachineOption (){
   const NUMBER = Math.floor(Math.random() * 3);
   switch (NUMBER){
    case 0:
        return ROCK;
    case 1: 
        return PAPER;
    case 2:
        return SCISSORS;
   }
    
}



