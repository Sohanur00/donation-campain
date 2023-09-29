import { Outlet } from "react-router-dom";
import Navber from "../Navber/Navber";


const MainlyOut = () => {
    return (
        <div>


            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default MainlyOut;