import Games from './components/Game'; 
import './App.css';
import { wordList } from './constants/wordList';




function App() {

    const DarkMode = () => {
        if(dark)
        {
            document.documentElement.classList.add("dark");}
        else 
        {
            document.documentElement.classList.remove("dark");}
    }

    // const randomElement = wordList[Math.floor(Math.random()*wordList.length)];
    return(
        <div className = {"app dark:bg-zinc-700"}>
            <Games
                darkness = { DarkMode }
            />

        </div>
    )
}

export default App;