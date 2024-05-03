import './App.css';
import About from './Component/About/About';
import Home from './Component/Home/Home';
import Main from './Component/Main';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Project from './Component/Project/Project';
import ContactUs from './Component/Contact/ContactUs';
import Skills from './Component/About/Skills';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />
        },
      ]
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path:"/Skills",
      element:<Skills />
    },
    {
      path: "/project",
      element: <Project />
    },
    {
      path: "/contact us",
      element: <ContactUs />
    }
  ])
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
