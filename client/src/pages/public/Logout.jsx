import { Link, useNavigate } from "react-router";
import { useContext } from "react";
import { UserContext } from "../../context/user/UserContext";
import heroImg from '../../assets/home1.png';


export function LogoutPage() {
    const navigate = useNavigate();
    const { isLoggedIn, logout } = useContext(UserContext);

    function handleLogoutClick() {
        logout();

        setTimeout(() => {
            navigate('/');
        }, 5000);
    }

    return (
        <main className="min-page-height">
            <div className="container">
                <div className="row">
                    <h1 className="col-12 mb-5">Atsijungti</h1>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src={heroImg} className="d-block mx-lg-auto img-fluid border rounded" alt="Bootstrap Themes"
                            width={600} height={400} loading="lazy" />
                    </div>
                        {
                        isLoggedIn
                            ? <div className="col-lg-6">
                                <h4>Ar tikrai norite atsijungti?</h4>
                                <button onClick={handleLogoutClick} className="btn btn-info mt-5">Atsijungti</button>
                            </div>
                            : <div className="col-lg-6">
                                <p>Sėkmingai atsijungėte nuo savo paskyros! Už 3 sekundžių matysite pagrindinį puslapį!</p>
                                <Link to='/' className="btn btn-info mt-5">Grįžti į pagrindinį</Link>
                            </div>
                    }
                </div>
            </div>
        </main>
    );
}