
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
//import useRestaurant from "../Utils/useRestaurant";
import { IMG_CDN_URL } from "./config";
import Shimmer from "./Shimmer";
import {addItem} from "../Utils/cartSlice";
import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "./config";


const RestaurantMenu = () => {
    
    const [restaurantData, setRestaurantData] = useState(null);
    const [restaurantMenuData, setRestaurantMenuData] = useState(null);
    const [restaurantRecMenuData, setRestaurantRecMenuData] = useState(null);
    const {id} =  useParams(); 
  
    //const restaurant = useRestaurant(id)

    const dispatch = useDispatch()

    const addFoodItem = (item) => {
       dispatch(addItem(item));
    };

   

  useEffect(() => {
    fetchmenu();
  }, []);

  const fetchmenu = async() => {
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9783692&lng=77.6408356&restaurantId=" + id);
    const json = await data.json();
    //console.log(json);
    let restaurantMenuData = json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    //console.log(restaurantMenuData);
    if(restaurantMenuData === undefined) {
        restaurantMenuData = (restaurantMenuData === undefined) ? json.data?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards : [];
    }
    //console.log(restaurantMenuData);
    let recommendedMenuData = restaurantMenuData.filter(
        (res) => res.card?.card?.type?.includes('CATEGORY_TYPE_RECOMMENDED')
    );
    if (recommendedMenuData.length === 0) {
        recommendedMenuData = (restaurantMenuData[1]?.card?.card !== undefined) ? [restaurantMenuData[1]] : [];
    }
    setRestaurantData(json.data?.cards[0]?.card?.card?.info);
    setRestaurantMenuData(restaurantMenuData);
    setRestaurantRecMenuData(recommendedMenuData);
    //console.log(restaurantMenuData, recommendedMenuData);
  };
  if(!restaurantData && !restaurantMenuData) {
    return <Shimmer />;
  }
  const {name, city, cloudinaryImageId, costForTwoMessage, cuisines, avgRating} = restaurantData;
  const {title, itemCards} = restaurantRecMenuData[0]?.card?.card;
  return (
    <div className='restaurant-info-container'>
        <div className='restaurant-details'>
            <img src={IMG_CDN_URL + cloudinaryImageId} alt={name} className='restaurant-image' />
            <h1>{name}</h1>
            <h2>{cuisines.join()}</h2>
            <h3>{costForTwoMessage}</h3>
            <h4>{city}</h4>
            <h5>Rating: {avgRating}</h5>
        </div>
        <div className='restaurant-menu'>
            <h1>Menu</h1>
            <div className='sub-menu'>
                <h3>{title}</h3>
                <ul>
                    {
                        itemCards?.map((menuItem)=>{
                            return (
                                <li 
                                    key={menuItem.card?.info?.id}
                                >
                                    <span className='item-name'>{menuItem.card?.info?.name}</span>
                                    <span className='item-price'>Rs.: {(menuItem.card?.info?.price) ? (menuItem.card?.info?.price)/100 + "/-" : (menuItem.card?.info?.defaultPrice)/100 + "/"}</span>
                                    <span className='item-type'>{(menuItem.card?.info?.isVeg === 1) ? "🟢" : "🔴"}</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}
export default RestaurantMenu;