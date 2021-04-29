import "./SubMenu.css";
import Button from "./Button";
import React from 'react';
const SubMenu = (props) => {
    return(
        <div className="options_menu">
            <div className="btn_holder">
                <Button setActiveBtn = {props.setActiveBtn} textChange = {props.textChange}>{props.buttonText[0]}</Button>
                <Button setActiveBtn = {props.setActiveBtn} textChange = {props.textChange}>{props.buttonText[1]}</Button>
            </div>
            <div className="btn_holder">
                <Button setActiveBtn = {props.setActiveBtn} textChange = {props.textChange}>{props.buttonText[2]}</Button>
                <Button setActiveBtn = {props.setActiveBtn} textChange = {props.textChange}>{props.buttonText[3]}</Button>
            </div>
        </div>
    );
}
export default SubMenu;