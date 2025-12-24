import "./AnimatedText.css";

const AnimatedText = ({title, background}) => {
    return(
        <div className={`animated_gradient ${background ? background : "body-background"}`}>
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