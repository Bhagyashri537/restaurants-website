
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import useRestaurant from "../Utils/useRestaurant";
import { IMG_CDN_URL } from "./config";
import Shimmer from "./Shimmer";
import {addItem} from "../Utils/cartSlice";


const RestaurantMenu = () => {
    
    
    const { id } = useParams();
  
    const restaurant = useRestaurant(id)

    const dispatch = useDispatch()

    const addFoodItem = (item) => {
       dispatch(addItem(item));
    };
   
   
   return (!restaurant) ? <Shimmer/> :
   (
    
   <div   className="flex">
      
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
                    <li id={item.id}>
                        {item.name} --
                        <button className="p-1 bg-green-300"
                          onClick={() => addFoodItem(item)}>
                            Add
                        </button>
                    </li>
                )
               })}
            </div>   
     </div>
         
   </div>
   )
}
export default RestaurantMenu;