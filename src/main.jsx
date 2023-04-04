import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import FristPages from './components/FristPages/FristPages';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Services from './components/Services/Services';
import UnkhonPage from './components/UnkhonPage/UnkhonPage';
import UserDetails from './components/UserDetails/UserDetails';
import './index.css';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <FristPages></FristPages>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')

      },
      {
        path: 'user/:userId',
        element: <UserDetails></UserDetails>,
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)


      }, {
        path: 'about',
        element: <About></About>
      }, {
        path: 'products',
        element: <Products></Products>,
      },
      {
        path: 'services',
        element: <Services></Services>
      }, {
        path: 'contact',
        element: <Contact></Contact>
      }, {
        path: '*',
        element: <UnkhonPage></UnkhonPage>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
