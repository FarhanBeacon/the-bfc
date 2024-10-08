import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1 className="text-5xl font-bold text-center">The BFC Kitchen</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;