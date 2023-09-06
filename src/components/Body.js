import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { BsSearch,BsWifiOff } from "react-icons/bs";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [listofRestaurants,setlistofRestaurants] = useState([]);
    const [filteredRestaurants,setFilteredRestaurants] = useState([]);
    const [searchText,setsearchText] = useState("");
    useEffect( () => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9277137&lng=80.2328284&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        setlistofRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    };

    const OnlineStatus = useOnlineStatus();
    if(OnlineStatus === false){
        return (
            <div className="offlineWrapper">
                <h1 className="offline-text">You Are Offline.<BsWifiOff /></h1>
                <h4 className="offline-text-small">Please Check Your Internet Connection.</h4>
            </div>
        );
    }


    //conditional rendering
    if(listofRestaurants?.length === 0) {
        return <Shimmer />;
    }

    return(
        <div className = "body">
            <div className="filter">
            <div className="wrap">
                <div className="search">
                    <input type="text" placeholder="What are you looking for?" className="search-box" value={searchText} onChange={ (e) => {
                        setsearchText(e.target.value);
                    }}></input>
                    <button className="searchButton" onClick={ () => {
                        const filteredRestaurant= listofRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));

                        setFilteredRestaurants(filteredRestaurant);
                    }
                    }><BsSearch /></button>
                </div>
            </div>
            <button className="filter-btn" onClick={() =>{
                    console.log("Button clicked");
                    const filterdList = listofRestaurants?.filter(
                        (res1) => res1.info.avgRating >= 4
                    );
                    console.log(filterdList);
                    setFilteredRestaurants(filterdList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {filteredRestaurants?.map((restaurant) => (
                    <Link className="resCard_Link" key={restaurant.info.id} to={"/restaurant/"+ restaurant.info.id}><RestaurantCard  resData={restaurant} /></Link>
                ))}
            </div>
        </div>
    );
};

export default Body;