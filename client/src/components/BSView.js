import React from 'react'
import '../css/BSView.css'
import BSDiscover from './BSDiscover'
import {Link} from 'react-router-dom';
export default function BSView(props) {
  console.log(props.location.state)
    return (
        <div>
            <nav>
                <ul className="bs-navbar">
                    <li className="home-btn"><Link to="/">Bookshelf</Link></li>
    <li><Link to="/login" className="prof-btn"> {props.location.state &&props.location.state.us!=""?props.location.state.us:<img className="prof-img" src={require("../assets/image.png")}></img>}</Link></li>
                </ul>

            </nav>

            <div className="search-bar">
                <input type="text" placeholder="Search.."></input>
            </div>
         <BSDiscover/>
        </div>
    )
}
