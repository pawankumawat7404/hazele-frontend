import { Link } from "react-router-dom"
export default function Header2(){
    return(
        <div>
            <div className= "container mb-2 mt-5 d-flex justify-content-between">
        <Link className="text-decoration-none text-dark" to="/Homepage" >HAZEL <br />A.C.</Link>
        <Link className=" text-decoration-none text-dark"  to="/about" >About</Link>
      </div>
       
        </div>
    )
}