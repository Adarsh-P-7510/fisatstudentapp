import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link class="nav-link active" aria-current="page" to="/">AddFisat</Link>
                            <Link class="nav-link" to="/SearchFisat">SearchFisat</Link>
                            <Link class="nav-link" to="/DeleteFisat">DeleteFisat</Link>
                            <Link class="nav-link" to="/ViewAll">ViewAll</Link>
                            
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar