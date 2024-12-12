import { useState } from "react"
import Todoform from "./Todoform"
import View from "./View"


function Todo(){
    const[list,setList]=useState([{id:1,name:'apple'},{id:2,name:'banana'}])


    return(
        <div className='py-5 flex flex-wrap gap-5'>
            <Todoform list={list} setList={setList}></Todoform>
            <View list={list} setList={setList}></View>
        </div>
    )
}
export default Todo