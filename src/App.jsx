import { Outlet, Link } from "react-router-dom";

function App() {

  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
      </header>

      <Outlet />
      
      <footer className="read-the-docs">My footer</footer>
    </>
  );
}

export default App;
