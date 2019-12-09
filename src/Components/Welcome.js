import React, { Component } from 'react';


class Welcome extends Component{


    render(){

        return(
            <nav className="navbar-light bg-light">
                <div className="container-fluid-nav text-center mb-0 h4">

                    <img src="https://img.icons8.com/dusk/64/000000/rainbow.png" width="30" height="30" className="d-inline-block align-top"/>
                    Welcome to the Weather App

                </div>
            </nav>

        )
    }
}

export default Welcome
