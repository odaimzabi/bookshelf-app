import React from 'react'
import '../css/BSBookInfo.css'

export default function BSBookInfo(props) {
    console.log(props)
    return (
        <div className="book-info">
            <div className="content">
            <h2>{props.location.state.title}</h2>
            </div>
            <div className="imgbx">
            <img src={props.location.state.image}></img>
            </div>
            
            <p >
            {props.location.state.description.length>500?props.location.state.description.substr(0,500):props.location.state.description}
            </p>
        <div className="comments">
         <textarea placeholder="Write your comment..">
            
         </textarea>
         <button>Add Comment</button>
         </div>
      </div>
         
        
    )
}
