import React, { Component }from 'react';
import FormatDate from "./FormatDate.js";
import Form from "./Form.js";
import FormatTime from "./FormatTime.js";


class Card extends React.Component{
    render(){
        return(

            <div className="container">

                <Form getWeather = {this.props.getWeather} handleChange = {this.props.handleChange}/>

                <div> City: {this.props.city} </div>
                <div> Country: {this.props.country}</div>

                <div>
                    <span> Temperature: {this.props.temperature_c} C </span>
                    <span> {this.props.temperature_f} F </span>
                </div>

                <div>
                    Date: <FormatDate date={this.props.date} />
                </div>

                <div> Description: {this.props.description} </div>

                <div>
                    Sunset: <FormatTime time={this.props.sunset}/>
                </div>

                <div>
                    Sunrise: <FormatTime time={this.props.sunrise}/>
                </div>

            </div>

        )
    }


}

export default Card;
