import { useEffect,useState } from "react"
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const [resInfo,setresInfo] = useState(null);

    const {resId} = useParams();

    useEffect(
        //callback function
        () => {
            fetchMenu();
        },[]);
        const fetchMenu = async () => {
            const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9277137&lng=80.2328284&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
            const json = await data.json();

            setresInfo(json.data);
    };
    if (resInfo?.length === 0) return <Shimmer />;
    //const{name,cuisines,avgRating,costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
    const { itemCards } = resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || {};

    return (
        <div className="menu">
            <h1>{resInfo?.cards[0]?.card?.card?.info.name}</h1>
            <p>{resInfo?.cards[0]?.card?.card?.info.cuisines.join(', ')}</p>
            <h3>{resInfo?.cards[0]?.card?.card?.info.costForTwoMessage}</h3>
            <h3>{resInfo?.cards[0]?.card?.card?.info.avgRating}</h3>
            <h2>Menu Details</h2>
            <ul>
                {itemCards?.map((item) => (
                <li key={item.card.info.id}>{item.card.info.name} --- Rs.{item.card.info.price/100}</li>
                ))}
            </ul>
        </div>
    );
};

export default RestaurantMenu