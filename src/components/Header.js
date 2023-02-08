

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
                 <li>Home</li>
                 <li>About</li>
                 <li>Contact</li>
                 <li>About</li>
             </ul>
          </div>
       </div>

    )
}

export default Header;