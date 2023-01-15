import React from 'react'
import {
    Link,
} from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#01171b" }}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src="../decyber.png" alt="DeCyber" width="200" height="50" className="d-inline-block align-text-top" />
                        <img src="../invictus.png" alt="DeCyber" width="120" height="50" className="d-inline-block align-text-top" />
                        </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/" style={{ color: "white" }}>Home</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}