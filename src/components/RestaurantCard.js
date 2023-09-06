import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const{ resData } = props;
    
    const{cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo} = 
        resData?.info;
    return (
        <div className = "res-card">
            <img className="res-logo" src={CDN_URL+cloudinaryImageId} />
            <h3 className="resName">{name}</h3>
            <div className="rating_cost">
                <h4 className="avgRating">{avgRating}</h4>
                <h4>{costForTwo}</h4>
            </div>
            <h4 className="cuisine">{cuisines.join(", ")}</h4>
            <h4 className="DeliveryTime">{resData.info.sla.deliveryTime + " Minutes"}</h4>
        </div>
    );
};

export default RestaurantCard;