import {useState} from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import Menu from "@mui/material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import Button from "@mui/icons-material/Button";
import FormControlLabel from "@mui/icons-material/FormControlLabel";
import {Switch} from '@mui/material'; 

const Set = (props) => {

    const[anchor,setAnchor] = useState(null);

const handleClick = (event) => {
    setAnchor(event.currentTarget);
}

const Change = () => {
    props.darkness(!props.dark);
}

const Close = () => {
    setAnchor(null);
}
const open = Boolean(anchor)
  return (
    <div>
        <SettingsIcon
        className = "text-black dark:text-white"
        onClick = { handleClick }/>

        <Menu open={open} anchor = {anchor} onCLose = {Close}>
            <FormControlLabel
                label = "dark mode"
                className = "p1-3.5 text-slate-600"
                control = {<Switch onChange = {Change}/>}/>
            <hr />
            <div className ="flex justify-around pt-2">
            <a className = "flex" href = "https://github.com/real-tea">
            <GitHubIcon/>
            </a>
            <a className = "flex" href = "https://twitter.com/Akash_real_tea">
            <TwitterIcon/>
            </a>
            </div>
        </Menu>
    </div>
  )
}


export default Set;