import del from '../assets/delete.png';

function Viewitem(props){


    const HandleDelete=(removeid)=>{
        var temparr=props.list.filter(function(item){
            if(removeid===item.id){
                return false
            }
            else{
                return true
            }
        })
        props.setList(temparr)
    }

    return(
        <div className="flex justify-between items-center">
            <li>{props.index+1} {props.item.name}</li>
            <img src={del} alt="delete" style={{width:"30px"}} onClick={()=>{HandleDelete(props.item.id)}}></img>
        </div>
    )
}

export default Viewitem