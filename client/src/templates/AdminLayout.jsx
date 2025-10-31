import { useContext } from "react";
import { Outlet } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Sidebar } from "../components/Sidebar";
import { LoginForm } from "../components/LoginForm";
import { UserContext } from '../context/user/UserContext';

export function AdminLayout() {
     const { isLoggedIn } = useContext(UserContext);

    return (
        <>
            <div className="container-fluid">
                <Header />
            </div>
            <div className="container-fluid min-page-height">
                {
                    isLoggedIn
                        ? <div className="row">
                            <Sidebar />
                            <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                                <Outlet />
                            </div>
                        </div>
                        :
                        <>
                            <div className="container">
                                <div className="row">
                                    <h1 className="col-12 mb-5">Prisijungti</h1>
                                </div>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <LoginForm />
                                </div>
                            </div>
                        </>
                }
            </div>
            <div className="container-fluid">
                <Footer />
            </div>
        </>
    )
}