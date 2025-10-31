import { useContext } from "react";
import { UserContext } from "../../context/user/UserContext";

export function AdminDasboardPage() {
    const { email } = useContext(UserContext);

    return (
        <main>
            <h3> Sveiki atvykę į administracinį "HELDESK" puslapį!!!</h3>
            <div>
            <h4 className="mt-5">El. paštas: {email}</h4>
            </div>  
        </main>
    );
}


