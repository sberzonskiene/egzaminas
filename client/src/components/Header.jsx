import { Link, NavLink } from "react-router";
import logo from '../assets/logo.png';
import { useContext } from "react";
import { UserContext } from "../context/user/UserContext";


const navLinkStyles = ({ isActive }) => ({
  color: isActive ? '#007bff' : '#333',
  textDecoration: isActive ? 'none' : 'underline',
  fontWeight: isActive ? 'bold' : 'normal',
  padding: '5px 10px'
});

export function Header() {
    const { isLoggedIn } = useContext(UserContext);

    return (
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <div className="col-md-3 mb-2 mb-md-0">
                <Link to='/' className="d-inline-flex Navlink-body-emphasis text-decoration-none">
                    <img src={logo} height={50} alt="Logo" />
                </Link>
            </div>
            <ul className="nav col-12 col-md-auto mb-2 justify-content-center  mb-md-0">
                <li><NavLink to="/" style={navLinkStyles} className="nav-Navlink px-2 Navlink-secondary">Pagrindinis</NavLink>|{" "}</li>
                <li><NavLink to="/questions" style={navLinkStyles} className="nav-Navlink px-2">Klausimai-atsakymai</NavLink>|{" "}</li>
            </ul>
            <div className="col-md-3 text-end">
                 {isLoggedIn ? (
                    <>
                        <Link to="/admin" className="btn btn-info me-2">Administracija</Link>
                        <Link to="/logout" className="btn btn-outline-dark">Atsijungti</Link> 
                    </>
                ) : (
                    <>
                        <Link to="/register" className="btn btn-info me-2">Registruotis</Link>
                        <Link to="/login" className="btn btn-outline-dark">Prisijungti</Link> 
                    </>
                )}
            </div>
        </header>
    );
}