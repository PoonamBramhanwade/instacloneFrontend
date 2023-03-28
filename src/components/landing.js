import "./landing.css"
import { NavLink } from "react-router-dom"
const Landing=()=>{
   return(
   <div className="landingpage">
    <div className="welcome">
        <h1>welcome to 10x instaclone</h1>
        <NavLink to="/allpost"> <button>Enter</button></NavLink>
       
    </div>
    <div className="welcomeimage">
        <img height="100%" width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCIsZD4xrWi0AMM5J6svhYz0wH1Rt-fj_iiw&usqp=CAU" alt="" />
    </div>
   </div>
   )
}
export default Landing