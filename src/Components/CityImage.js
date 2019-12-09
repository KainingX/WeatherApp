import React, { Component } from 'react';


class CityImage extends Component{


    render(){

        return(

            <img className="card-img" style= {{objectFit: 'cover'}} src={this.props.image_url} />

        )
    }
}

export default CityImage
