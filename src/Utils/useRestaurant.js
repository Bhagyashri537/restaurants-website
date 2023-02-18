import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../components/config";

const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getResturantData();
  }, []);

  async function getResturantData() {
    const data = await fetch( FETCH_MENU_URL + id );
    const json = await data.json();
    console.log(json.data);
    setRestaurant(json.data);
  }

  return restaurant;
};
export default useRestaurant;
