import SubMenu from "./Dynamic/SubMenu";
import {useState} from "react";

const MenuHolder = (props) => {

    const baseMenu = ["FIGHT","BAG","POKEMON","RUN"];

    let pokemonMoves;

    if (props.pokemon) {
        pokemonMoves = [props.pokemon.moves[0].move.name, props.pokemon.moves[1].move.name, props.pokemon.moves[2].move.name, props.pokemon.moves[3].move.name];
    }

    const [activeBtn, setActiveBtn] = useState(null);

    console.log(props.pokemon);
    if (activeBtn === "FIGHT"){
        return (
            <div className="menu_wrapper">
                <SubMenu setActiveBtn = {setActiveBtn} textChange={props.textChange} buttonText = {pokemonMoves}/>
            </div>
        )
    }else {
        return(
            <div className="menu_wrapper">
                <SubMenu setActiveBtn = {setActiveBtn} buttonText = {baseMenu}/>
            </div>
        );
    }

}
export default MenuHolder;