import { createBrowserRouter } from "react-router-dom";
import MainlyOut from "../Component/MainLyout/MainlyOut";
import Home from "../Component/Home/Home";
import Donation from "../Component/Donation/Donation";
import Statistics from "../Component/Statistics/Statistics";
import ErrorPage from "../Component/ErrorElement/ErrorPage";
import Card from "../Component/Card/Card";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainlyOut></MainlyOut>,
        errorElement: <ErrorPage></ErrorPage>  ,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('../../public/Data.json')
            },
            {
                path: '/Donation',
                element: <Donation></Donation>
            },
            {
                path: '/Statistics',
                element:<Statistics></Statistics>
            },
            {
                path:"/homeCard/:id",
                element: <Card></Card>  ,
                loader: () => fetch('../../public/Data.json')
            }


        ]
    }
])

export default router;