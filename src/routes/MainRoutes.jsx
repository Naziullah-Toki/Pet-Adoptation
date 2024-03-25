import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/homepage/HomePage";
import Contact from "../pages/contact/Contact";
import Adoptation from "../pages/Adoptation/Adoptation";
import Breeder from "../pages/breeder/Breeder";
import Shop from "../pages/shop/Shop";
import Blog from "../pages/blog/Blog";



const MainRoutes = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {
                path:"/",
                element:<HomePage/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/adoptation",
                element:<Adoptation/>
            },
            {
                path:"/breeder",
                element:<Breeder/>
            },
            {
                path:"/shop",
                element:<Shop/>
            },
            {
                path:"/blog",
                element:<Blog/>
            },
        ]
    }
])

export default MainRoutes;