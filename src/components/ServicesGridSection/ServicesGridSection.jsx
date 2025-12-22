import { Link } from "react-router-dom";
import "./ServicesGridSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const ServicesGridSection = ({lists}) => {
    return(
        lists && lists.length >= 1 && 
        <div className="services_grid_block">
            {lists.map((item,index) => (
                <div className="services_grid_item" key={index}>
                    <Link target="_blank" to={item.link}>
                        <img src={item.icon} alt={item.title} className="services_lists_icon" />
                        <p className="services_lists_title">{item.title}</p>
                    </Link>
                    <ul className="services_features_lists">
                        {item.feature.map((list,i) => (
                            <li className="services_features_item" key={i}>
                                <FontAwesomeIcon icon={faCheck} />
                                <span>{list}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
        
    )
}

export default ServicesGridSection