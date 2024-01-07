import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav 
                    className="navbar navbar-dark" style={{ backgroundColor: '#92C7CF' }}>
                        <div>
                            <a href="/users"
                                className="navbar-brand">
                                    Administrasi DINAMIK-18
                            </a></div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent
