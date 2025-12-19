import "./NumbersGrid.css";
import { useCountUp } from "react-countup";

const briefcase = `${process.env.REACT_APP_API_URL}/assests/home/powering/briefcase.webp`;
const protection = `${process.env.REACT_APP_API_URL}/assests/home/powering/protection.webp`;
const diamond = `${process.env.REACT_APP_API_URL}/assests/home/powering/diamond.webp`;
const artificial = `${process.env.REACT_APP_API_URL}/assests/home/powering/artificial-intelligence.webp`;

const poweringLists = [
    {
        icon: briefcase,
        text: "Projects Delivered",
        id: "briefcase"
    },
    {
        icon: protection,
        text: "Countries Served",
        id: "protection"
    },
    {
        icon: diamond,
        text: "Web Developers",
        id: "diamond"
    },
    {
        icon: artificial,
        text: "Years of experience",
        id: "artificial"
    }
]

const NumbersGrid = () => {

    useCountUp({
        ref: 'briefcase',
        start: 0,
        end: 1000,
        separator: '',
        suffix: '+',
        enableScrollSpy: true,
        scrollSpyDelay: 0,
        scrollSpyOnce: true
    });

    useCountUp({
        ref: 'protection',
        start: 0,
        end: 25,
        separator: '',
        suffix: '+',
        enableScrollSpy: true,
        scrollSpyDelay: 0,
        scrollSpyOnce: true
    });

    useCountUp({
        ref: 'diamond',
        start: 0,
        end: 50,
        separator: '',
        suffix: '+',
        enableScrollSpy: true,
        scrollSpyDelay: 0,
        scrollSpyOnce: true
    });

    useCountUp({
        ref: 'artificial',
        start: 0,
        end: 10,
        separator: '',
        suffix: '+',
        enableScrollSpy: true,
        scrollSpyDelay: 0,
        scrollSpyOnce: true
    });

    return(
        <div className="numbers_grid_section">
            {poweringLists.map((item,i) => (
                <div className="numbers_grid_item" key={i}>
                    <span id={item.id} />
                    <div className="numbers_item_content">
                        <div className="numbers_item_icon">
                            <img src={item.icon} alt={item.id} />
                        </div>
                        <p className="paragraph_content">{item.text}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default NumbersGrid