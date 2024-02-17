import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import MainLayout from "./MainLayout";
import Home from "./Home";
import Education from "./Education";
import Projects from "./Projects";
import Contact from "./Contact";

const myCreatedRoute =  createBrowserRouter([
    {
        path : "/",
        errorElement: <ErrorPage></ErrorPage>,
        element : <MainLayout></MainLayout>,
        children : [
            {
                path : "/",
                element : <Home></Home>,
            },
            {
                path: "education",
                element : <Education></Education>
            },
            {
                path: "projects",
                element : <Projects></Projects>
            },
            {
                path: "contact",
                element : <Contact></Contact>
            },
        ]
    }
])

export default myCreatedRoute;