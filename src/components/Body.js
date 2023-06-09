import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../Utils/helper";
import useOnline from "../Utils/useOnline"
import { FcSearch } from "react-icons/fc";



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
        <div className="p-4 bg-yellow-100 my-3 flex justify-center">
            <input type="text"
             className="focus:bg-orange-200 p-2 m-2s w-72 rounded-lg "
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
             > < FcSearch/>
            </button>
           
            
        </div>
        <div className="flex flex-wrap bg-yellow-50 p-5 pl-24">
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

