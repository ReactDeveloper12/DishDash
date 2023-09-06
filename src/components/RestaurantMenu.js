import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
   
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