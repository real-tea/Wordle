// import { useState } from "react";
import "./App.css";
import Game from "./components/Game";
// import wordList from "./wordList";

function App() {
  const darkHandler = (dark) => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  };
  
  return (
    <div className={"app dark:bg-zinc-800"}>
      <Game darkness={darkHandler} />
    </div>
  );
}

// function App(){
//   const correct = wordList[Math.floor(Math.random()*wordList.length)];
//   return(
//     <div>
//       {correct}
//     </div>)
// }

export default App;
