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
                        <span>Paklausimai/gedimai</span>
                    </h6>
                    <ul className="nav nav-pills flex-column">
                        <li className="nav-item">
                            <Link className="nav-link d-flex align-items-center gap-2 link-dark link-offset-2" to="/admin/help">
                                Naujas atsakymas
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link d-flex align-items-center gap-2 link-dark link-offset-2" to="/admin/answer">
                                Visi atsakymai
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link d-flex align-items-center gap-2 link-dark link-offset-2" to="/admin/answer/published">
                                Viešieji atsakymai
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link d-flex align-items-center gap-2 mb-3 link-dark link-offset-2" to="/admin/answer/draft">
                                Ruošiami atsakymai
                            </Link>
                        </li>
                    </ul>
                    <ul className="nav nav-pills flex-column">
                        <li className="nav-item">
                            <Link className="nav-link d-flex align-items-center gap-2 link-dark text-decoration-underline link-offset-2" to="/admin">
                                Klientas
                            </Link>
                        </li>
                    </ul>
                    <ul className="nav nav-pills flex-column">
                        <li className="nav-item">
                            <Link className="nav-link d-flex align-items-center gap-2 link-dark link-offset-2" to="/admin/help">
                                Naujas klausimas/skundas
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link d-flex align-items-center gap-2 link-dark link-offset-2" to="/admin/answer">
                                Visi klausimai
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link d-flex align-items-center gap-2 link-dark link-offset-2" to="/admin/answer/published">
                                Išspręsti klausimai
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link d-flex align-items-center gap-2 mb-3 link-dark link-offset-2" to="/admin/answer/draft">
                                Svarstomi klausimai
                            </Link>
                        </li>
                    </ul>                
                </div>
            </div>
        </div>
    );
}
 
 