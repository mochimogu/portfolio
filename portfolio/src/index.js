import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Content from './routes/content';
import Error from './routes/error'
import Project from './routes/project';
import Contact from './routes/contact';
const root = ReactDOM.createRoot(document.getElementById('root'));


const routes = createBrowserRouter([
  {
    path : "/",
    element: <App/>,
    errorElement : <Error/>,
  },
  {
    path : "/aboutMe",
    element: <Content/>,
    errorElement : <Error/>,
  },
  {
    path : "/project",
    element: <Project/>,
    errorElement : <Error/>,
  },
  {
    path : "/contact",
    element: <Contact/>,
    errorElement : <Error/>,
  },
])


root.render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
