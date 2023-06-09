import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Title = () => (
    <a href="/">
   <img className="h-28 p-2 rounded-xl"
    alt="logo"
    src="https://wp.scoopwhoop.com/wp-content/uploads/2022/09/Screenshotter-YouTube-ZwigatoInternationalTrailerKapilSharmaShahanaGoswamiNanditaDas-124-1.jpg?w=1024"
   />
   </a>
)

const Header = () =>{

   const cartItems = useSelector((store) => store.cart.items) //subscribing
   console.log(cartItems)
    return (
       <div className="flex justify-between bg-yellow-400 shadow-lg ">
          <Title/>
          <div className="nav-items">
             <ul className="flex py-10">
                 <Link to="/">
                    <li className="px-2">Home</li>
                 </Link>
                 <Link to="/about">
                    <li className="px-2">About</li>
                 </Link>
                 <Link to="/contact">
                    <li className="px-2">Contact</li>
                 </Link>
                 <Link to="/cart">
                    <li className="px-2">Cart - {cartItems.length} Items</li>
                 </Link>
             </ul>
          </div>
       </div>

    )
}

export default Header;