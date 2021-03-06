import React from 'react'

import './styles.scss'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" id="navbar">
            <div className="container">
                <a className="navbar-brand" href="#">Ariel Soto</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="navbar-nav">
                        <li className="nav-item">
                            <del>
                                <a className="nav-link active fw-lighter text-uppercase" aria-current="page" href="#">Casamientos</a>
                            </del>
                        </li>
                        <li className="nav-item">
                            <del>
                                <a className="nav-link fw-lighter text-uppercase" href="#">XVs</a>
                            </del>
                        </li>
                        <li className="nav-item">
                            <del>
                                <a className="nav-link fw-lighter text-uppercase" href="#">Precios</a>
                            </del>
                        </li>
                        <li className="nav-item">
                            <del>
                                <a className="nav-link fw-lighter text-uppercase" href="#">Hablemos</a>
                            </del>
                        </li>
                    </ul>
                </div>  
            </div>
        </nav>
    )

}