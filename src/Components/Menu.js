import "./Menu.css"
import FeedbackHolder from "./FeedbackHolder";
import MenuHolder from "./MenuHolder";
import {useState} from "react";

const Menu = (props) => {

    const [textChange, setTextChange] = useState("click something");

    return(
        <div className="menu">
            <FeedbackHolder currentText = {textChange}/>
            <MenuHolder pokemon ={props.pokemon} textChange = {setTextChange}/>
        </div>
    );
}
export default Menu;