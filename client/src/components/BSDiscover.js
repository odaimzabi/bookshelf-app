import React,{useState,useEffect} from 'react'
import '../css/BSDiscover.css'
import axios from 'axios'
import {useHistory,Redirect,Link} from 'react-router-dom'



export default function BSDiscover() {

    
const history=useHistory();

function handleHistory(){
        history.push("/favorites")
}

    
    const [items,setItems]=useState(null)
    useEffect(()=>{
        async function getBooks(){
            const res=await axios({method:"get",url:"https://www.googleapis.com/books/v1/volumes?q=subject:fiction+religion+action"})
            setItems(res.data.items)
        }
        getBooks()
    },[])

      
        
    return (
       
        <div className="discover-books">
            
            {items!=null?items.map(item=>
                    
               
                    <div key={item.id}className="books-list">
                    <div className="imgbx">
                     <img src={item.volumeInfo.imageLinks.smallThumbnail}></img>
                     </div>
                     <div className="content">
                        <h2>{item.volumeInfo.title}</h2>
                        <h4>{item.volumeInfo.authors[0]}</h4>
                        <p>{item.volumeInfo.description.length>100?item.volumeInfo.description.substr(0,100)+"...":item.volumeInfo.description}</p>
                        <Link to={{pathname:'/discoverbook',state:{
                                    image: item.volumeInfo.imageLinks.smallThumbnail,
                                    title:item.volumeInfo.title,
                                    description:item.volumeInfo.description
                        }}} 
                            className="show-btn">
                                Show more 
                    </Link>
                        <button className="add-btn" onClick={()=><Redirect to='/discoverbook'/>}>Add to favorites</button>
                     </div>
                    </div>
                     
            ):null}
                
        </div>
    )
}
