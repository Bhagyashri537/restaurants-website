import { Link } from "react-router-dom";


const Title = () => (
    <a href="/">
   <img className="logo"
    alt="logo"
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIlbz7UxtD02us1-KilNMvEeHSG5jP3L6Yyw&usqp=CAU"
   />
   </a>
)

const Header = () =>{
    return (
       <div className="header">
          <Title/>
          <div className="nav-items">
             <ul>
                 <Link to="/">
                    <li>Home</li>
                 </Link>
                 <Link to="/about">
                    <li>About</li>
                 </Link>
                 <Link to="/contact">
                    <li>Contact</li>
                 </Link>
                 <Link to="/cart">
                    <li>Cart</li>
                 </Link>
             </ul>
          </div>
       </div>

    )
}

export default Header;