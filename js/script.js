class player{
    constructor(initscore,number,role,name){
        this.current_score = initscore;
        this.score = initscore;
        this.number = number;
        this.name = name;
        this.role = role;
    }
    GetADice(){
        var element = document.getElementById("dice");
        var score1 = document.getElementById("score"+this.number+"_1");
        var x = parseInt(Math.random()*6+1);
        element.src=("../images/dice-"+x+".png");
        
        if(x!=1){
            this.current_score = this.current_score + x;
            score1.innerHTML = this.current_score;
        }
        else{
            this.current_score = 0;
            score1.innerHTML = this.current_score;
            this.role = this.role + 1;
            if (this.number==1){
                var element = document.getElementById("pl1");
                var element2 = document.getElementById("pl2");
                element.classList.remove("role");
                element2.classList.add("role");
            }
            else{
                var element = document.getElementById("pl1");
                var element2 = document.getElementById("pl2");
                element.classList.add("role");
                element2.classList.remove("role");
            }
        }
    }
    GetHold(){
        var element = document.getElementById("score"+this.number);
        var score1 = document.getElementById("score"+this.number+"_1");
        this.score = this.score + this.current_score;
        this.current_score = 0;
        score1.innerHTML = 0;
        element.innerHTML = this.score;
        this.role = this.role + 1;
        if (this.score>=100){
            alert(this.name + " is the winner");
        }
      }
}

player1 = new player(0,1,0,"player1");
player2 = new player(0,2,1,"player2");
function dice(){
    if(player1.role%2==0){
        var element = document.getElementById("pl1");
        var element2 = document.getElementById("pl2");
        element.classList.add("role");
        element2.classList.remove("role");
        player1.GetADice();
        
    }
    else{
        var element = document.getElementById("pl2");
        var element2 = document.getElementById("pl1");
        element.classList.add("role");
        element2.classList.remove("role");
        player2.GetADice();
        
        if (player2.current_score==0){
            player1.role = player1.role +1;
        }
        
    }
}
function hold(){
    if(player1.role%2==0){
        player1.GetHold();
        var element = document.getElementById("pl1");
        var element2 = document.getElementById("pl2");
        element2.classList.add("role");
        element.classList.remove("role");
    }
    else{
        player2.GetHold();
        player1.role = player1.role +1;
        var element = document.getElementById("pl2");
        var element2 = document.getElementById("pl1");
        element2.classList.add("role");
        element.classList.remove("role");
    }
}

function NewGame(){
    player1.score = 0;
    player2.score = 0;
    player1.current_score = 0;
    player2.current_score = 0;
    var element = document.getElementById("score1");
    var score1 = document.getElementById("score1_1");
    var element1 = document.getElementById("score2");
    var score12 = document.getElementById("score2_1");
    element.innerHTML = 0;
    element1.innerHTML = 0;
    score1.innerHTML = 0;
    score12.innerHTML = 0;
}