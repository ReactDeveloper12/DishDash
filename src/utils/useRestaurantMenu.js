import { useEffect } from "react";
import { useEffect,useState } from "react"
import { useParams } from "react-router-dom";

const useRestaurantMenu = (resId) => {
    const [resInfo,setresInfo] = useState(null);

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
    return resInfo;
}

export default useRestaurantMenu