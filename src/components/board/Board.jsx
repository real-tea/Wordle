import { useState , useEffect } from 'react'; 
const correct = wordList[Math.floor(Math.random()*wordList.length)];
//correct word randomized every refresh 

console.log(correct);
let defaultBoard = [];
let defaultChar = [];

"abcdefghijklmnopqrstuvwxyz".split("").forEach((i)=>{
    defaultChar[i] = "";
});

for(let i = 0 ; i < 6 ; i++ ){
    defaultBoard.push([]);
    for(let j = 0; j < 5;j++){
        defaultBoard[i].push(["",""]);
    }
}

function Board({click , letter }){
  const [ win , setWin] = useState(false);
  const [ lost , setLost ] = useState(false);

  useEffect(() => {
    if(win||lost){
      console.log("Game Over!");

    }
    else{
      if(click !== 0){
        if(letter === "DEL"){
          setCol(col === 0?0:col-1);
        }
      }
    }
  },[click])


  return(
    <div>
      hellow
    </div>
  );

}

export default Board;