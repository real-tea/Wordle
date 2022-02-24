import React from 'react'
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import Set from './Set';

function Navbar(props) {

    const Clicker = () => {
        props.help(true);
    }
  return (
    <div className = "navbar flex w-100 justify-between items-center pt-5 py-3 sm:pt-3 text-black dark:text-white"> 
    <HelpOutlineOutlinedIcon
    onClick = { Clicker }/>

    <h1 className = "text-3xl font-bold tracking-wider">Wordle</h1>
    <Set darkness = {props.darkness} dark = {props.dark}/>
    
    </div>
  )
}

export default Navbar;