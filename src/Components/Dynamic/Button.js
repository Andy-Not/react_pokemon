import "./Button.css";
const Button = (props) => {

    const clicked = () => {
        if (props.textChange){
            props.textChange("pikachu uses " + props.children);
        }
        if (props.setActiveBtn){
            props.setActiveBtn(props.children);
        }
    }
    return(
        <div onClick={clicked} className="Button">
            {props.children}
        </div>
    );
}
export default Button;