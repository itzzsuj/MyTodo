import Header from '../components/header';
import Card from '../components/Card';
import Todo from '../components/Todo';
import { useLocation } from 'react-router-dom';

function Landing() {
    const data = useLocation(); // Get data passed via navigate
    const users = data.state?.user; // Safely access the users property

    console.log(data); // Debugging: Check what data is passed

    if (!users) {
        return <p>Error: No user data found. Please login first.</p>;
    }

    return (
        <div className="bg-black flex justify-center items-center h-lvh ">
            <div className="bg-slate-200 p-10 rounded-sm h-fit">
                {/* Pass the extracted users to Header */}
                <Header name={users}></Header>
                <div className="py-5 flex flex-wrap gap-3">
                    <Card bgcolor={"#aa42f5"} head={"23"} sub={"Chennai"}></Card>
                    <Card bgcolor={"#f54281"} head={"24 December"} sub={"23:44"}></Card>
                    <Card bgcolor={"#f5cb42"} head={"Built Using"} sub={"React"}></Card>
                </div>
                <Todo></Todo>
            </div>
        </div>
    );
}

export default Landing;
