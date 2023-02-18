import { Link } from "react-router-dom";


const Title = () => (
    <a href="/">
   <img className="h-28 p-2"
    alt="logo"
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIlbz7UxtD02us1-KilNMvEeHSG5jP3L6Yyw&usqp=CAU"
   />
   </a>
)

const Header = () =>{
    return (
       <div className="flex justify-between bg-yellow-50 shadow-lg">
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
                    <li className="px-2">Cart</li>
                 </Link>
             </ul>
          </div>
       </div>

    )
}

export default Header;