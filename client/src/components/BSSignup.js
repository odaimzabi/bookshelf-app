import React,{useState} from 'react'
import '../css/BSSignup.css'
import {useForm} from 'react-hook-form'
import {Redirect,Link} from 'react-router-dom'
import axios from 'axios'
export default function BSSignup(props) {

    //install react hook form so you can manipulate forms easily
    const {register,handleSubmit}=useForm();
    const [authenticated,setAuth]=useState("")
    const [error,setError]=useState(false)
    // const [username,setUsername]=useState("")
    const onSubmit=(data)=>{    
        axios({method:'post',url:"http://localhost:8080/api/signup",data:data}).then((res)=>{
            
            if (res.status===200){

                setAuth(res.data.message)
               
            }else{

                setError(true)
            }
    }).catch(e=>setError(true))
    

    
    }

    if (authenticated){
        console.log(authenticated)
        return <Redirect  to={{
            pathname: "/",
            state: {us:authenticated}
          }}/>
         
    }
    
    return (
        <div className="signup-form" >
            <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Signup</h2>
            {error===true?<h1>User already exist</h1>:null}
            <input type="text" placeholder="First Name" name="firstName" ref={register}></input> 
            <input type="text" placeholder="Last Name" name="lastName" ref={register}></input>
            <input type="text" placeholder="Email" name="email" ref={register}></input>
            <input type="text" placeholder="Password"  name="password" ref={register}></input>
            <button type="submit" >Sign up!</button>
            <div className="not-a-member">
            Have an account? <Link className="linksu" to="/login">Login up!</Link>
            </div>
            </form>
        </div>
    )
}
