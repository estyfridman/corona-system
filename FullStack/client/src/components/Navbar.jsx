import { NavLink } from "react-router-dom";
import logo from "./../logo.png";

export default function Navbar() {
  return (
    <div className="bg-sky-200">
      <nav className="flex justify-between items-center p-3">
        <NavLink to="/">
          <img alt="logo" className="h-10 inline rounded-full" src={logo}></img>
        </NavLink>

        <NavLink className="inline-flex items-center justify-center whitespace-nowrap text-sm font-light ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 h-9 rounded-md px-3" 
        to="/allcustomers">
          Management Customers
        </NavLink>
        <NavLink className="inline-flex items-center justify-center whitespace-nowrap text-sm font-light ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 h-9 rounded-md px-3" 
        to="/customer">
          Create New
        </NavLink>
        <NavLink className="inline-flex items-center justify-center whitespace-nowrap text-sm font-light ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 h-9 rounded-md px-3" 
        to="/home">
          Home
        </NavLink>
      </nav>
    </div>
  );
}