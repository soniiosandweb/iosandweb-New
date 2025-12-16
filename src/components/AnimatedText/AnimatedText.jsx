import "./AnimatedText.css";

const AnimatedText = ({title}) => {
    return(
        // <div className="body-background">
        //     <h2 className="animated_gradient_text">{title ? title : "IosAndWeb Technologies"}</h2>
        // </div>

        <div className="animated_gradient body-background">
            <div className="animated_gradient_track">
                <span>{title ? title : "IosAndWeb Technologies"}</span>
                <span>{title ? title : "IosAndWeb Technologies"}</span>
                <span>{title ? title : "IosAndWeb Technologies"}</span>
                <span>{title ? title : "IosAndWeb Technologies"}</span>
            </div>
        </div>
    )
}

export default AnimatedText