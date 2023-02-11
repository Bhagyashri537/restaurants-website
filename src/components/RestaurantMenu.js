import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./config";

const RestaurantMenu = () => {
    // const params = useParams();
    // const {resId} = params

    const { id } = useParams();

    const [restaurant, setRestaurant] = useState(null)

    useEffect(() => {
        getResturantData()
    },[])

    async function getResturantData(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId="+ id);
        const json = await data.json();
        console.log(json.data)
        setRestaurant(json.data)
    }
   return (
    
   <div   className="menu">
      
       <div>
            <h2>Restaurant id : {id}</h2>
            <h1>{restaurant?.name}</h1>
            <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId}/>
            <h3>{restaurant?.area}, {restaurant?.city}</h3>
            <h4>{restaurant?.costForTwoMsg}</h4>
            <h4>⭐ {restaurant?.avgRating}</h4>
        </div>
        <div>
            <h1>All menu items</h1>
            <ul>
                {Object.values(restaurant?.menu?.items).map((item) => 
                (
                <li key={item.id}>{item.name}</li>
                )
                )}
            </ul>   
     </div>
         
   </div>
   )
}
export default RestaurantMenu;