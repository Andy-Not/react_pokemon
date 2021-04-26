import "./SubMenu.css";
import Button from "./Button";
const SubMenu = () => {
    return(
        <div className="options_menu">
            <div className="btn_holder">
                <Button>ATTACK</Button>
                <Button>BAG</Button>
            </div>
            <div className="btn_holder">
                <Button>POKEMON</Button>
                <Button>RUN</Button>
            </div>
        </div>
    );
}
export default SubMenu;