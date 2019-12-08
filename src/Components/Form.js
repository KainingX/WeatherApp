import React, { Component } from 'react';

class Form extends Component{

    render(){
        return(
            <form onSubmit={this.props.getWeather}>
            City: <input type="text" name="city" onChange = {this.props.handleChange} />
            Country: <input type="text" name="country" onChange = {this.props.handleChange}/>
            <input type="submit" value="Submit"/>
            </form>
        )
    }
}



export default Form
