import FeedbackDisplay from "./Dynamic/FeedbackDisplay";

const FeedbackHolder = (props) => {
    return(
        <div className="feedback_wrapper">
            <FeedbackDisplay currentText = {props.currentText}/>
        </div>
    );
}
export default FeedbackHolder;