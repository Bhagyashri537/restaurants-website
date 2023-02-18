import { useEffect, useState } from "react";


const useOnline = () => {
   const [isOnline, setIsOnline] = useState(true)

   const onlineHandler = () => {
    setIsOnline(true)
   }
   const offlineHandler = () => {
    setIsOnline(false)
   }

   useEffect(() => {
      
    window.addEventListener("isOnline" , onlineHandler )
    window.addEventListener("isOffline", offlineHandler )
   },[])

   return () => {
    window.removeEventListener("isOnline", onlineHandler)
    window.removeEventListener("isOffline", offlineHandler)
   }

   return isOnline;
}
export default useOnline;