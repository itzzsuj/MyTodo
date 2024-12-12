import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Login(props){

    const navigate=useNavigate()

    const users=props.users
    //to take the user from the input box
    const[user,setUser]=useState()
    const[pass,setPass]=useState()
    const[ruser,setRuser]=useState(true)

    const HandleUser=(event)=>{
        setUser(event.target.value)
    }

    const HandlePass=(event)=>{
        setPass(event.target.value)
    }


    function Checkuser(){
        var userfound=false


        users.forEach(function(item){
            if(item.username===user && item.password===pass){
                console.log("Login Successful !")
                setPass("")
                setUser("")
                userfound=true
                navigate('/Landing', { state: { user: user } })

            }
        })
        if(userfound===false){
            console.log("Login Failed")
            setRuser(false)
        }

    }

    return(
        <div className="bg-black flex justify-center items-center h-lvh">
            <div className="bg-slate-50 p-10 rounded-md h-fit">
                <h1 className="text-2xl font-medium">Hey HI 👋 </h1>
                {ruser?<p>I help you manage your activities after login</p>:<p className="text-red-500 font-medium">Kindly Signup Before Login</p>}
                <input value={user} onChange={HandleUser} placeholder="username" className="p-1 border-2 border-black my-1 rounded-md bg-transparent"></input>
                <input value={pass} onChange={HandlePass} placeholder="password" className="p-1 block border-2 border-black my-1 rounded-md bg-transparent"></input>
                <button onClick={Checkuser}className="bg-violet-400 p-2 block rounded-md">Login</button>
                <p>Don't have an account? <Link to={'/Signup'} className="underline">Signup</Link></p>
            </div>


        </div>
    )
}
export default Login