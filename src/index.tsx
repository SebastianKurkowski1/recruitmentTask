import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import './index.css';
import App from "./routes/Main/Main";
import ErrorPage from "./routes/ErrorPage/ErrorPage";


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
