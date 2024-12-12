function Header(props){
    return(
    <div>
        <h1 className="font-medium text-3xl">Hello {props.name}</h1>
        <p className="font-medium">I help you manage your activities!</p>
    </div>
    )
}
export default Header