import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

function filterData (searchText,restaurants)  {
  const filterData = restaurants.filter((restaurant) => 
    restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    )
    return filterData;
}


const Body = () => {
        
    const [filteredRestaurant, setFilteredRestaurant] = useState([])
    const [allRestaurants, setAllRestaurant] = useState([]);
    const [searchText,setSearchText] = useState("");

    useEffect(() => {
       getRestaurant()
    },[])

    async function getRestaurant() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=24.7913957&lng=85.0002336&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()
        console.log(json)
        setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards)
        setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards)
    }

    if(!allRestaurants) return null;

    if(filteredRestaurant.length === 0){
        return <h2>No Restaurant Found</h2>
    }
             
    return (allRestaurants?.length === 0) ? (<Shimmer/>
    ) : (
    
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
               const data = filterData(searchText,allRestaurants) 
               setFilteredRestaurant(data)
             }}
             >search
            </button>
        </div>
        <div className="restaurant-list">
            {filteredRestaurant.map((restaurant) => {
                return <RestaurantCard {...restaurant.data} key= {restaurant.data.id}/>
            })

            }
        </div>
        </>
    )
}
export default Body;