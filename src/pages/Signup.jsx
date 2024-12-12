import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup(props) {
    const navigate = useNavigate();
    const users = props.users;
    const setUsers = props.setUsers;

    const [eusername, setEusername] = useState("");
    const [epass, setEpass] = useState("");

    const HandleUser = (evt) => {
        setEusername(evt.target.value);
    };
    const HandlePass = (evt) => {
        setEpass(evt.target.value);
    };

    const HandleAdd = () => {
        setUsers((prevUsers) => {
            const updatedUsers = [...prevUsers, { username: eusername, password: epass }];
            console.log("Updated Users in HandleAdd:", updatedUsers);
            return updatedUsers;
        });
        navigate('/');
    };

    useEffect(() => {
        console.log("Users state after update:", users);
    }, [users]); // Log whenever the `users` state changes

    return (
        <div className="bg-black flex justify-center items-center h-lvh">
            <div className="bg-slate-50 p-10 rounded-md h-fit">
                <h1 className="text-2xl font-medium">Hey HI 👋 </h1>
                <p>You can signup here 😎</p>
                <input value={eusername} onChange={HandleUser} placeholder="username" className="p-1 border-2 border-black my-1 rounded-md bg-transparent" />
                <input value={epass} onChange={HandlePass} placeholder="password" className="p-1 block border-2 border-black my-1 rounded-md bg-transparent" />
                <button onClick={HandleAdd} className="bg-amber-300 p-2 block rounded-md">Signup</button>
                <p>Don't have an account? <Link to={'/'} className="underline">Login</Link></p>
            </div>
        </div>
    );
}
export default Signup;
