import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Landing from "./views/landing/Landing.jsx";
import Projects from "./views/projects/Projects.jsx";
import ProjectsDetails from "./views/project-details/ProjectDetails.jsx";
import './index.scss';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Esto está roto</div>,
    children: [
      { index: true, element: <Landing /> },
      { path: 'projects', element: <Projects /> }, 
      { path: 'projects/:projectId', element: <ProjectDetails /> }, 
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
