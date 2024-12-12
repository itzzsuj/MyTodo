
import Viewitem from "./Viewitem"

function View(props){

    const list=props.list
    const setList=props.setList

    return(
        <div className="bg-amber-500 p-3 flex-grow rounded-xl">
            <h1 className="text-2xl font-medium">Today's Activity</h1>
            {list.length===0?<p>You haven't added anything yet</p>:""}
            <ul>{
                list.map(function(item,index){
                    return(
                        <Viewitem item={item} index={index} list={list} setList={setList}></Viewitem>
                    )

                })}
            </ul>

        </div>
    )
}
export default View