import "./ConcludingServicesLists.css"
import { Link } from "react-router-dom"

const ConcludingServicesLists = ({lists, classname}) => {
    return(
        lists && lists.length >= 1 &&
        <div className={`concluding_services_grid ${classname && classname}`}>
            {lists.map((item, i) => (
                <Link reloadDocument className="concluding_services_item" key={i}>
                    <img src={item.icon} alt={item.title} className="concluding_services_img" />
                    <p className="concluding_services_title">{item.title}</p>
                </Link>
            ))}
        </div>
    )
}

export default ConcludingServicesLists