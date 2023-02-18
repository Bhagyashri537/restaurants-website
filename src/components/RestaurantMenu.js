
import { useParams } from "react-router-dom";
import useRestaurant from "../Utils/useRestaurant";
import { IMG_CDN_URL } from "./config";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    
    
    const { id } = useParams();
  
    const restaurant = useRestaurant(id)
   
   
   return (!restaurant) ? <Shimmer/> :
   (
    
   <div   className="menu">
      
       <div>
            <h2>Restaurant id : {id}</h2>
            <h1>{restaurant?.name}</h1>
            <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId}/>
            <h3>{restaurant?.area}, {restaurant?.city}</h3>
            <h4>{restaurant?.costForTwoMsg}</h4>
            <h4>⭐ {restaurant?.avgRating}</h4>
            {console.log(restaurant)}
        </div>
        <div>
            <h1>All menu items</h1>
            <div>
            
               {Object.values(restaurant?.menu?.items).map((item) => {
                return (
                    <li id={item.id}>{item.name}</li>
                )
               })}
            </div>   
     </div>
         
   </div>
   )
}
export default RestaurantMenu;