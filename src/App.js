import WordList from './constants/wordList';
import Keyboard from './components/Keyboard';
import './App.css';
import { useState , useEffect } from 'react';

function App() {
  const [message , setMessage] = useState(""); //message to show the user on the screen
  const [boardData , setBoardData] = useState(JSON.parse(localStorage.getItem("board-data")));

  const Reset = () => {
    var FirstAlphabet = Math.floor(Math.random()*26);

    var WordIndex = Math.floor(Math.random() * WordList[String.fromCharCode(97 + FirstAlphabet)].length);

    let newData = {...boardData, "solution" : WordList[String.fromCharCode(97 + FirstAlphabet)][WordIndex],
                                  "rowIndex" : 0,
                                  "boardWords" : [],
                                  "boardRowStatus":[],
                                  "presentCharArray" : [],
                                  "absentCharArray" : [],
                                  "correctCharArray" : [],
                                  "status" : "IN_PROGRESS"};
    setBoardData(newData);
    localStorage.setItem("board-data",JSON.stringify(newData));
  }

  const handleKeyPress = (key) => {
    if(boardData.rowIndex > 5 || boardData.status == "WIN") return;
    if(key ==="ENTER"){
      if(charArray.length === 5){
        let word = charArray.join("").toLowerCase();
        if(!WordList[word.charAt(0)].includes(word)){
          // handleError();
          handleMessage("Not a Word");
          return;
        }
        enterBoardWord(word);
        setCharArray([]);
      }else{
        handleMessage("Not 5 words");
      }
      return;
    }
    if(key == 8)//backspace pressed{
      {charArray.splice(charArray.length -1 ,1);
        setCharArray([...charArray]);
    }
    else if(charArray.length < 5){
      charArray.push(key);
      setCharArray([...charArray]);
    }
    enterCurrentText(charArray.join("").toLowerCase());

  }
  const enterCurrentText = (word) =>{
    let boardWords = boardData.boardWords;
    let rowIndex = boardData.rowIndex;
    boardWords[rowIndex] = word;
    let newBoardData = {...boardData,"boardWords" : boardWords};
    setBoardData(newBoardData);
  }


  const rows = [0,1,2,3,4,5];
  return (
    <div className="App">
      <div className = "banner">
        <div className = "header">WORDLE</div>
        <button className = "reset" onClick = {Reset}>themes*/</button>
      </div>
      {message && <div className = "message">
        {message} 
        </div>} 
        <div className='cube'>
              {rows.map((row,rowIndex)=>(
                <div className={`cube-row ${boardData && row===boardData.rowIndex && error && "error"}`} key={rowIndex}>
                    {
                      [0,1,2,3,4].map((column,letterIndex)=>(
                        <div key={letterIndex} className={`letter ${boardData && boardData.boardRowStatus[row]?boardData.boardRowStatus[row][column]:""}`}>
                          {boardData && boardData.boardWords[row] && boardData.boardWords[row][column]}
                        </div>
                      ))
                    }
                </div>
              ))}
          </div>
          <div className = "bottom">
            <Keyboard boardData = {boardData} handleKeyPress = {handleKeyPress}/>
          </div>
      
    </div>
  );
}

export default App;
