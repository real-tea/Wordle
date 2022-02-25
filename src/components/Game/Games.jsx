import {useState, useEffect } from 'react';
import Help from '../Help';
import Modal from '../Modal';
import NavBar from "../NavBar";
import styles from "./style.module.css";
import KeyBoard from "../KeyBoard";
import Board from "../Board";
import Error from "../Error";

function Games(props) {

  const [help , setHelp] = useState(false);
  const [error , setError] = useState("");
  const [letters , setLetters ] = useState({});
  const [letter , setLetter ] = useState();
  const [clicked , setClicked] = useState(0);
  const [dark , setDark] = useState(false);
  const [changed , setChanged] = useState(false);

  useEffect(()=>{
    window.addEventListener("keydown",onClickDown);

    return() => window.removeEventListener("keydown" , onClickDown);
  });

  const onClickDown = (event) =>{
    if(event.key === "Enter")
    {  setLetter("ENTER");
      setClicked(clicked+1);}
    else if(event.key === "Backspace"){
      setLetter("DEL");
      setClicked(clicked + 1);

    }
    else if("abcdefghijklmnopqrstuvwxyz".includes(event.key.toLowerCase())){
      setLetter(event.key.toLowerCase());
      setClicked(clicked + 1);
    }

  };

  return (
    <div>
      {help && (
        <Modal title = "how to play!" help = {setHelp}>
        {""}
        <Help/>
        </Modal>
      )}
      {error && <Error>{error}</Error>}
      <div className = {styles.game}>
        <NavBar help = {setHelp} darkness = {setDark} dark = {dark} />
        <hr/>
        <Board
          letter = {letter}
          clicks = {clicked}
          letters = {LetterHandler}
          error = {setError}/>

        <KeyBoard keyHandler = {keyHandler} letters = {letters} changed = {changed}/>
      </div>
    </div>
  )
}

export default Games