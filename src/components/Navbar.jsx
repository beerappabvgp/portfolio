import { NavLink } from "react-router-dom"
import { FaDownload } from 'react-icons/fa';
import { handleDownload } from "../utils/download";
const Navbar = () => {
  return (
    <header className="header">
        <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md hover:bg-yellow-200">
            <p className="blue-gradient_text hover:pink-gradient_text">BB</p>
        </NavLink>
        <nav className="flex text-lg gap-7 font-medium items-center justify-center">
            <NavLink to="/about" className={({ isActive }) => {
                return (isActive ? 'text-blue-500' : 'text-black')
            }}>
                <p className="hover:text-yellow-300">About</p>
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => {
                return (isActive ? 'text-blue-500' : 'text-black')
            }}>
                <p className="hover:text-yellow-300">Projects</p>
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => {
                return (isActive ? 'text-blue-500' : 'text-black')
            }}>
                <p className="hover:text-yellow-300">Contact</p>
            </NavLink>
            <NavLink to="" className={({ isActive }) => {
                return (isActive ? 'text-blue-500' : 'text-black')
            }}>
                <button className="flex justify-center items-center cursor-pointer" onClick={handleDownload}>
                <p className="mr-1 text-black-500 hidden sm:block">Download Resume</p>
                </button>
            </NavLink>
        </nav>
    </header>
  )
}

export default Navbar