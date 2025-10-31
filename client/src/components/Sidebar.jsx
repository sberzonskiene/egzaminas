import { Link } from "react-router";
 
export function Sidebar() {
    return (
        <div className="sidebar border border-right col-md-3 col-lg-2 p-0 text-bg-info rounded">
            <div className="offcanvas-md offcanvas-end" tabIndex="-1" id="sidebarMenu" aria-labelledby="sidebarMenuLabel">
                <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
                    <ul className="nav nav-pills flex-column">
                        <li className="nav-item">
                            <Link className="nav-link d-flex align-items-center gap-2 link-dark text-decoration-underline link-offset-2" to="/admin">
                                Administracija
                            </Link>
                        </li>
                    </ul>
                    <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-3 text-uppercase">
                        <span>Pavadinimas</span>
                    </h6>
                    <ul className="nav nav-pills flex-column">
                        <li className="nav-item">
                            <Link className="nav-link d-flex align-items-center gap-2 link-dark link-offset-2" to="/admin/products/new">
                                Naujas ###
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link d-flex align-items-center gap-2 link-dark link-offset-2" to="/admin/products">
                                Visi ###
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link d-flex align-items-center gap-2 link-dark link-offset-2" to="/admin/products/published">
                                Viešieji ###
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link d-flex align-items-center gap-2 mb-3 link-dark link-offset-2" to="/admin/products/draft">
                                Ruošiami ###
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
 
 