import { IMG_CDN_URL } from "../components/config";


const RestaurantCard = ({name,cloudinaryImageId,cuisines,lastMileTravelString,costForTwoString}) => {
    
    return (
        <div className="w-48 p-2 m-2 shadow-lg bg-green-50 border-separate">
           <img src= {IMG_CDN_URL + cloudinaryImageId}
           />
           <h2 className="font-bold text-xl">{name}</h2>
           <h3>{cuisines.join(" ,")}</h3>
           <h3>{lastMileTravelString}</h3>
           <h3>{costForTwoString}</h3>
        </div>
    )
}
export default RestaurantCard;
