import { useState } from 'react';
import './App.css';
import { wordList } from './constants/wordList';

function App() {

    const randomElement = wordList[Math.floor(Math.random()*wordList.length)];
    return(<>
    <h1>{randomElement}</h1>
    </>)
}

export default App;