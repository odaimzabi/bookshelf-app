import React,{useState} from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import '../css/BSLogin.css'
import { Redirect,Link } from 'react-router-dom'
export default function BSLogin() {
    const {register,handleSubmit}=useForm()
    const [auth,setAuth]=useState("")
    const [error,setError]=useState(false)
    const onSubmit=(data)=>{
        axios({method:'post',url:"http://localhost:8080/api/login",data:data})
        .then(res=>{
            if (res.status==200){
                console.log("auth")
                setAuth(res.data.message)
            }else if (res.status==500){
               
            }
        }).catch(err=>setError(true))
    }

    if (auth){
        return (
            <Redirect to={{
                pathname:'/',
                state:{us:auth}
            }}
            />
        )
    }
    return (
        <div className="login-form">
             <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Login</h2>
            <input type="text"  name="email" placeholder="Email" ref={register}></input>
            <input type="text" name="pwd" placeholder="Password" ref={register}></input>
            <button type="submit">Submit</button>
            <div className="not-a-member">
            Not a member? <Link className="linksu" to="/signup">Sign up!</Link>
            </div>
            {error && error==true?<h1>User does not exist!</h1>:null}
            </form>
        </div>
    )
}
