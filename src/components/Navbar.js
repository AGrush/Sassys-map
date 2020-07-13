import React from 'react';
import Search from '../components/Search';

const Navbar = ({ searchState, letters }) => {

        return (
            <nav className="d-flex navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="www.sassyladancer.com">Sassy's</a>
                <button className="navbar-toggler" 
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle Navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Reviews</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Testimonials</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Special Offers</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <Search 
                             searchState={searchState}
                             letters={letters}
                        />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        );
    }


export default Navbar;