function Card(props){
    return(
        <div style={{backgroundColor:props.bgcolor}} className="p-4 flex flex-col flex-grow rounded-xl items-center">
            <h1 className="text-2xl">{props.head}</h1>
            <p>{props.sub}</p>
        </div>
    )
}
export default Card