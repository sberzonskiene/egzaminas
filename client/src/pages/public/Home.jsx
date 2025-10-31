import { Link } from 'react-router';
import homeImg from '../../assets/home1.png';

export function HomePage() {
    return (
        <div style={{backgroundImage:`url(${homeImg})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
                className="px-4 py-5 text-center">
            <div className="py-5">
                <h1 className="display-5 fw-bold text-black">"Helpdesk" vartotojų puslapis</h1>
                <div className="col-lg-6 mx-auto">
                    <p style={{color:'black'}} className="fs-5 mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s
                        most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system,
                        extensive prebuilt components, and powerful JavaScript plugins.</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center"> 
                    <Link to="#" className="btn btn-info btn-lg px-4 me-sm-3 fw-bold">Custom button</Link>
                </div>
                </div>
            </div>
        </div>
    );
}