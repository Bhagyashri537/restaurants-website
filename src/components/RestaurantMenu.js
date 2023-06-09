import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
//import useRestaurant from "../Utils/useRestaurant";
import { IMG_CDN_URL } from "./config";
import Shimmer from "./Shimmer";
import { addItem } from "../Utils/cartSlice";
import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "./config";
import { SiIfood } from "react-icons/fc";


const RestaurantMenu = () => {
  const [restaurantData, setRestaurantData] = useState(null);
  const [restaurantMenuData, setRestaurantMenuData] = useState(null);
  const [restaurantRecMenuData, setRestaurantRecMenuData] = useState(null);
  const { id } = useParams();

  //const restaurant = useRestaurant(id)

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  useEffect(() => {
    fetchmenu();
  }, []);

  const fetchmenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9783692&lng=77.6408356&restaurantId=" +
        id
    );
    const json = await data.json();
    //console.log(json);
    let restaurantMenuData =
      json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    //console.log(restaurantMenuData);
    if (restaurantMenuData === undefined) {
      restaurantMenuData =
        restaurantMenuData === undefined
          ? json.data?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards
          : [];
    }
    //console.log(restaurantMenuData);
    let recommendedMenuData = restaurantMenuData.filter((res) =>
      res.card?.card?.type?.includes("CATEGORY_TYPE_RECOMMENDED")
    );
    if (recommendedMenuData.length === 0) {
      recommendedMenuData =
        restaurantMenuData[1]?.card?.card !== undefined
          ? [restaurantMenuData[1]]
          : [];
    }
    setRestaurantData(json.data?.cards[0]?.card?.card?.info);
    setRestaurantMenuData(restaurantMenuData);
    setRestaurantRecMenuData(recommendedMenuData);
    //console.log(restaurantMenuData, recommendedMenuData);
  };
  if (!restaurantData && !restaurantMenuData) {
    return <Shimmer />;
  }
  const {
    name,
    city,
    cloudinaryImageId,
    costForTwoMessage,
    cuisines,
    avgRating,
  } = restaurantData;
  const {  itemCards } = restaurantRecMenuData[0]?.card?.card;
  console.log(itemCards)
  return (
    <div className=" bg-orange-50">
        
    <div className="flex">
      <div className="">
        <div className=" p-7  shadow-xl  ">
          <img src={IMG_CDN_URL + cloudinaryImageId} alt={name} className="" />
        </div>
        <div className="p-7 pt-10 pl-48 shadow-xl">
          <h1 className="text-2xl text-red-800 font-medium">{name}</h1>
          <h2>{cuisines.join()}</h2>
          {/* <h3>{costForTwoMessage}</h3> */}
          <h4>{city}</h4>
          <h5>Rating: {avgRating}</h5>
         
        </div>
      </div>
      <div className="">
        <h1 className="text-4xl justify-center ml-24 pt-7">Menu {}</h1>
        <div>
          {/* <h3>{title}</h3> */}
          <ul>
            {itemCards?.map((menuItem) => {
              return (
                <li key={menuItem.card?.info?.id} className="flex p-2 shadow-lg ml-24">
                     <img src={IMG_CDN_URL + menuItem.card?.info?.imageId} alt="/" className="w-16 h-16 p-2"/>
                  <span className="pt-4 pl-2 pr-3" >{menuItem.card?.info?.name}</span>
                 
                  <span className="pt-4">
                    Rs.:{" "}
                    {menuItem.card?.info?.price
                      ? menuItem.card?.info?.price / 100 + "/-"
                      : menuItem.card?.info?.defaultPrice / 100 + "/"}
                  </span>
                  <span className="pt-4 pl-2 pr-3">{menuItem.card?.info?.isVeg === 1 ? "🟢" : "🔴"}</span>
                  <button onClick={() => addFoodItem(menuItem)} className=" bg-slate-200  shadow-2xl h-7 rounded-md ">Add to Cart</button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
};
export default RestaurantMenu;
