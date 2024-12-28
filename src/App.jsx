import { createBrowserRouter, Router, RouterProvider } from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Country from "./pages/Country";
import "./App.css";
import AppLayout from "./components/AppLayout";
import CountryDetails from "./pages/CountryDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/country",
        element: <Country/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/country/:id",
        element: <CountryDetails/>
      }
    ]
  }
  
 ]);
const App = () => {
  return (
      <RouterProvider router={router}>
      </RouterProvider>
  )
}

export default App
