import "./Main.css"
import Menu from "./Menu";
import Display from "./Display";
import Axios from "axios";
import {useState, useEffect} from "react";

const Main = () => {

    const [usePokemon, setPokemon] = useState(null)

    const resources = async () => {
          try {
              const pokemonInfo = await Axios.get(`https://pokeapi.co/api/v2/pokemon/pikachu`);
              setPokemon(pokemonInfo.data);
          }catch (e){
              console.log(e);
          }
    };
    resources();
    return(
        <div className="main">
            <Display/>
            <Menu pokemon={usePokemon}/>
        </div>
    );
}
export default Main;