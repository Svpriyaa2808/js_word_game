let wordsArray = [
    { 
        word: "tide" ,
        hint: "The rise and fall of the sea."
    },
    {
        word: "lend",
        hint: "To give something temporarily."
    },
    {
        word: "jolt",
        hint: "A sudden movement or shock."
    },
    {
        word: "moth",
        hint: "An insect similar to a butterfly, often nocturnal."
    },
    {
        word: "gaze",
        hint: "To look steadily and intently."
    },
    {
        word: "foul",
        hint: "Something unpleasant, often a smell or a violation in sports."
    },
    {
        word: "gale",
        hint: "A strong wind."
    },
    {
        word: "lava",
        hint: "Molten rock that flows from a volcano."
    },
    {
        word: "maze",
        hint: "A complex network of paths or passages."
    },
    {
        word: "grin",
        hint: "A big smile."
    },
    {
        word: "loom",
        hint: "A device for weaving fabric."
    },
    {
        word: "veil",
        hint: " A piece of cloth worn over the face."
    },
    {
        word: "husk",
        hint: "The outer shell or covering of a seed or nut."
    },
    {
        word: "brim",
        hint: "The upper edge of something hollow, like a cup."
    },
    {
        word: "vast",
        hint: "Enormous or expansive in size."
    },
    {
        word: "plea",
        hint: "A request made in an urgent and emotional manner."
    },
    {
        word: "cyst",
        hint: "A sac in the body, often filled with fluid."
    },
    {
        word: "mild",
        hint: "Not too strong; gentle in nature."
    },
    {
        word: "numb",
        hint: "Lacking feeling or sensation."
    },
    {
        word: "scar",
        hint: "A mark left on the skin after a wound heals."
    }
];
let computerWord;
let userWord ; 
let pattern = /^[A-Za-z]*$/;
let userArray=[];
let computerArray = [];
let computerHint ;
let winner = false;
let counter = 4;

const game = () => {

const getRandomNumber = () => {
   let randomNumber = Math.floor(Math.random()*wordsArray.length);
   let guessedWord = wordsArray[randomNumber];
   computerWord = guessedWord.word;
   computerHint = guessedWord.hint;
}
getRandomNumber();

    computerArray = [computerWord.substring(0,1),computerWord.substring(1,2),computerWord.substring(2,3),computerWord.substring(3)];
    console.log(computerWord);
    console.log(computerArray);
    console.log(computerHint);

    alert("Welcome to the word guessing game");

const hintfunction = () => {
    
    alert(`HINT : ${computerHint} You have '${counter}' attempts`);
}
hintfunction();

const inputValidation = () => {
    let validation = pattern.test(userWord);
    if(validation === false || userWord.length != computerWord.length ) {
        alert(`Enter four letter word`);
        userWord = prompt("Enter a word");
    }
}

const gameLoop = () => {
   
    while(!winner && counter > 0 ) {
        userWord =prompt("Enter a word"); 
        
        if(typeof userWord === "object") {
            alert(`You cancel the game.`);
            break;
        }

        userWord = userWord.toLowerCase();  
        inputValidation();
        userArray = [userWord.substring(0,1),userWord.substring(1,2),userWord.substring(2,3),userWord.substring(3)];
        
        if(computerWord !== userWord) {
      
                for(let i=0 ; i < computerArray.length ; i++ ){
    
                    if(userArray.includes(computerArray[i])) {             
                        alert(`The letter '${computerArray[i]}' is in the position '${i+1}'  of the guessed word`);          
                    }     
                }              
                counter--;
                hintfunction();
                
            } else{
                winner=true; 
                alert(`You Won the guessed word '${userWord}' is correct`);     
            }
    }
    
}
    
gameLoop();


if(counter <= 0 ) {
    alert( `You LOST `)
}

}
   
const playAgain = () => {

    let playMore;
    do {
        winner = false;
        game();
        counter = 4;
        playMore = prompt("If you want to play again, press 'y'. To cancel, press 'n'.");
        if(typeof playMore === "object") {
            alert("Thank you for playing!")
        }
        playMore = playMore.toLowerCase();
    } while (playMore === 'y');

    alert("Thank you for playing!");
}

let startButton = document.querySelector(".play_button");
startButton.onclick = () => {
    playAgain();
}
