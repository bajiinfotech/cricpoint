import React, { useContext } from 'react';
import NavLink from './NavLink';
import { isLoggedIn } from "./functions";
import { Link } from 'react-router-dom';
import Logo from '../Images/cricpoint.png'
import './CssFiles/Navbar.css'


const Navbar = () => {




    return (
        <div className='container'>
            <div className="navigation-wrap bg-light start-header start-style">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="navbar navbar-expand-md navbar-light">

                                <Link className="navbar-brand" to="/">
                                    <img src={Logo} alt="" />
                                </Link>

                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto py-4 py-md-0">
                                        {/* Dropdown  */}
                                        {/* <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4 active">
                                            <Link className="nav-link dropdown-toggle" data-toggle="dropdown" to="#" role="button" aria-haspopup="true" aria-expanded="false">Home</Link>
                                            <div className="dropdown-menu">
                                                <Link className="dropdown-item" to="#">Action</Link>
                                                <Link className="dropdown-item" to="#">Another action</Link>
                                                <Link className="dropdown-item" to="#">Something else here</Link>
                                                <Link className="dropdown-item" to="#">Another action</Link>
                                            </div>
                                        </li> */}


                                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                            <Link className="nav-link" to="/live-score">Live-Score</Link>
                                        </li>
                                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                            <Link className="nav-link" to="/cricket">Cricket</Link>
                                        </li>
                                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                            <Link className="nav-link" to="/indian-premier-league">IPL 2023</Link>
                                        </li>
                                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                            <Link className="nav-link" to="/womens-premier-league">WPL 2023</Link>
                                        </li>

                                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                            <Link className="nav-link" to="/dream11-prediction">Dream11 Prediction</Link>
                                        </li>
                                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                            <Link className="nav-link" to="/series">Series</Link>
                                        </li>
                                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                            <Link className="nav-link" to="/players">Players</Link>
                                        </li>
                                    </ul>
                                </div>

                            </nav>
                        </div>
                    </div>
                </div>
            </div>









            {/* {window.location.pathname.includes('dashboard') ? (
                <ToggleSidebarBtn />
            ) : ''} */}
        </div>
    );
};

export default Navbar;
