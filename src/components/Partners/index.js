import './style.css';
import OwlCarousel from "react-owl-carousel";

const onmen = `${process.env.REACT_APP_API_URL}/assests/images/partners/ONMEN.png`;
const gopuff = `${process.env.REACT_APP_API_URL}/assests/images/partners/Gopuff.webp`;
const seamless = `${process.env.REACT_APP_API_URL}/assests/images/partners/seamless.png`;
const doorDash = `${process.env.REACT_APP_API_URL}/assests/images/partners/DoorDash.png`;
const uber = `${process.env.REACT_APP_API_URL}/assests/images/partners/Uber-Eats-Logo.png`;
const srgn = `${process.env.REACT_APP_API_URL}/assests/images/partners/srgn.png`;
const lowes = `${process.env.REACT_APP_API_URL}/assests/images/partners/Lowes.png`;
const aesthetic = `${process.env.REACT_APP_API_URL}/assests/images/partners/aesthetic.png`;
const grubhub = `${process.env.REACT_APP_API_URL}/assests/images/partners/Grubhub.png`;
const chownow = `${process.env.REACT_APP_API_URL}/assests/images/partners/chownow.png`;
const vertical = `${process.env.REACT_APP_API_URL}/assests/images/partners/vertical.png`;
const Instacart = `${process.env.REACT_APP_API_URL}/assests/images/partners/Instacart.png`;
const mygermany = `${process.env.REACT_APP_API_URL}/assests/images/partners/mygermany.png`;
const walgreeens = `${process.env.REACT_APP_API_URL}/assests/images/partners/walgreeens-logo.png`;

const ten = `${process.env.REACT_APP_API_URL}/assests/images/partners/ten-white-2.png`;

const partnersLists = [
    {
        logo: onmen,
        title: "ONMEN",
    },
    {
        logo: srgn,
        title: "SRGN",
    },
    {
        logo: aesthetic,
        title: "Aesthetic",
    },
    {
        logo: vertical,
        title: "Vertical",
    },
    {
        logo: mygermany,
        title: "MyGermany",
    },
    {
        logo: ten,
        title: "Ten World",
    },
    {
        logo: lowes,
        title: "Lowes",
    },
    {
        logo: gopuff,
        title: "Gopuff",
    },
    {
        logo: grubhub,
        title: "Grubhub",
    },
    {
        logo: doorDash,
        title: "DoorDash",
    },
    {
        logo: Instacart,
        title: "Instacart",
    },
    {
        logo: seamless,
        title: "Seamless",
    },
    {
        logo: walgreeens,
        title: "Walgreeens",
    },
    {
        logo: uber,
        title: "Uber",
    },
    {
        logo: chownow,
        title: "Chownow",
    }
]

const Partners = () => {
    return(
        <>
            <div className="partners-panel">
                <OwlCarousel 
                    className="owl-theme partner-logos" 
                    loop 
                    autoplay={true} 
                    autoplayTimeout={3000} 
                    autoplayHoverPause={true} 
                    nav={false} 
                    dots={false} 
                    items={5}
                    responsive={
                        {
                            '0': {
                                items: 3,
                            },
                            '768': {
                                items: 3,
                            },
                            '992': {
                                items: 4,
                            },
                            '1200': {
                                items: 5,
                            }
                        }
                    }
                >
                    {partnersLists.map((item,i) => (
                        <div className="item" key={i}>
                            <div className="partner-logo">
                                <img src={item.logo} alt={item.title} className="brands_image" />
                            </div>
                        </div>
                    ))}
                </OwlCarousel>
            </div>
        </>
    )
}

export default Partners