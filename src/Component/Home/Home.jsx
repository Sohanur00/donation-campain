import { useLoaderData } from "react-router-dom";
import HomeCards from "../HomeCards/HomeCards";

const Home = () => {
const homeCard = useLoaderData()


    return (
        <div>

            <div>
                <HomeCards homeCard={homeCard}></HomeCards>

            </div>



        </div>
    );
};

export default Home;