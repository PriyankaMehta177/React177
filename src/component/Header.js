import { LOGO } from "./utils/constant";

const Header =()=>{
    return(
        <div className ="header">
            <div className ="logo-container" >
                <img className= "logo" src={LOGO} />
            </div>
         <div className="nav-item">
        <ul>
            <li>
                Home
            </li>
            <li>
                About
            </li>
            <li>
                Contact
            </li>
            <li>
                Cart
            </li>
         </ul>
         </div>
     </div>
    )
}

export default Header;