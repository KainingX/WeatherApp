import React, { Component } from 'react';


class Welcome extends Component{


    render(){

        return(
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <span class="navbar-brand mb-0 h1">
                        <img src="https://img.icons8.com/dusk/64/000000/rainbow.png" width="30" height="30" class="d-inline-block align-top"/>
                        Welcome to the Weather App
                    </span>
                </div>
            </nav>

        )
    }
}

export default Welcome
