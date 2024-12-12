import { useState } from "react"


function Todoform(props){

    const list=props.list
    const setList=props.setList
    const [element,setElement]=useState("")

    const Handlechange=(event)=>{
        setElement(event.target.value)
    }

    const HandleAdd=()=>{
        setList([...list,{id:list.length+1,name:element}])
        setElement("")
    }

    return(
        <div>
            <h1 className="text-2xl font-medium">Manage Activities</h1>
            <input value={element} onChange={Handlechange} placeholder="Next Activity?" className=" border-2 border-black p-1"></input>
            <button onClick={HandleAdd} className="bg-black text-white p-1 border-2 border-black">Add</button>
        </div>
    )
}
export default Todoform