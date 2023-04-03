import { IMG_CDN_URL } from "../components/config";


const FoodItem = ({name,
    description,
    cloudinaryImageId,
    price
    }) => {
    
    return (
        <div className="w-56 p-2 m-2 shadow-lg bg-green-50 border-separate box-content">
            <h2 className="font-bold text-xl">{name}</h2>
            <img src= {IMG_CDN_URL + cloudinaryImageId}/>
           <h3>{description}</h3>
           <h3>Rupees {price/100}</h3>
        </div>
    )
}
export default FoodItem;