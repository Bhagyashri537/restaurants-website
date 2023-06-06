import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../Utils/helper";
import useOnline from "../Utils/useOnline"



const Body = () => {
        
    const [filteredRestaurant, setFilteredRestaurant] = useState([])
    const [allRestaurants, setAllRestaurant] = useState([]);
    const [searchText,setSearchText] = useState("");

    useEffect(() => {
        getRestaurant()
     },[])
 
     async function getRestaurant() {
         const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
         const json = await data.json()
         console.log(json)
         setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards)
         setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards)
     }

    const isOnline = useOnline();

    if (!isOnline) {
       return <h2>Offline...Please check your internet connections</h2>
   }

   if(!allRestaurants) return null;
             
    return allRestaurants?.length === 0 ? (
    <Shimmer/>
    ) : (
    
        <>
        <div className="p-4 bg-red-100 my-3">
            <input type="text"
             className="focus:bg-orange-200 p-2 m-2s"
             placeholder="search"
             value={searchText}
             onChange={(e) => {
                setSearchText(e.target.value)
             }}
            />
            <button className="p-2 m-2 bg-orange-300 text-white rounded-md hover:bg-green-500"
             onClick={() => {
               const data = filterData(searchText,allRestaurants) 
               setFilteredRestaurant(data)
             }}
             >search
            </button>
        </div>
        <div className="flex flex-wrap bg-yellow-50 p-5 ">
            {filteredRestaurant.map((restaurant) => {
                return (
                    <Link to={"/restaurant/" + restaurant.data.id} 
                    key={restaurant.data.id}
                    >
                <RestaurantCard {...restaurant.data} />
                </Link>
                )
            })

            }
        </div>
        </>
    )
}
export default Body;

/* .header {
    display: flex;
    justify-content: space-between;
    margin: 10px;
    border: 1px solid brown;
}

.nav-items > ul {
   display: flex;
   list-style-type: none;
}

.nav-items > ul > li {
    padding: 10px;
}

.logo {
    width: 100px;
    
}

.card {
    width: 200px;
    border: 1px solid brown;
    padding: 10px;
    margin: 10px;
}

.card > img{
    width: 100%;
}

.restaurant-list {
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
}

.shimmer-card {
    width:200px;
    height: 200px;
    background: lightgray;
    margin: 20px;
}
.menu {
    display: flex;
} */