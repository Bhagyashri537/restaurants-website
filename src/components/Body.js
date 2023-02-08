import { useState } from "react";
import { Restaurantlist } from "./config";
import RestaurantCard from "./RestaurantCard";

function filterData (searchText,restaurants)  {
  const filterData = restaurants.filter((restaurant) => 
    restaurant.data.name.includes(searchText)
    )
    return filterData;
}


const Body = () => {

    const [searchText,setSearchText] = useState("");
    const [restaurants, setRestaurant] = useState(Restaurantlist)

    return(
        <>
        <div className="search-container">
            <input type="text"
             className="search-text"
             placeholder="search"
             value={searchText}
             onChange={(e) => {
                setSearchText(e.target.value)
             }}
            />
            <button className="search-btn"
             onClick={() => {
               const data = filterData(searchText,restaurants) 
               setRestaurant(data)
             }}
             >search
            </button>
        </div>
        <div className="restaurant-list">
            {restaurants.map((restaurant) => {
                return <RestaurantCard {...restaurant.data} key= {restaurant.data.id}/>
            })

            }
        </div>
        </>
    )
}
export default Body;