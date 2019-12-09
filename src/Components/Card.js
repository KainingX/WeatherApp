import React, { Component }from 'react';
import FormatDate from "./FormatDate.js";
import Form from "./Form.js";
import FormatTime from "./FormatTime.js";


class Card extends React.Component{
    render(){

        return(

            <div className="card mb-3" style= {{maxHeight: 540 + 'px'},{maxWidth: 540 + 'px'}}>
                <div className="row no-gutters">
                    <div className="col-md-6">
                        <img className="card-img" style= {{objectFit: 'cover'}} src="https://d13k13wj6adfdf.cloudfront.net/urban_areas/vancouver-3160f806cf.jpg" />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">

                            <h5 className="card-title">{this.props.city}, {this.props.country}</h5>

                            <h6 className="card-subtitle mb-2 text-muted">{this.props.description}</h6>

                            <div>
                                <p> Celsius: {this.props.temperature_c} °C</p>
                                <p> Fahrenheit: {this.props.temperature_f} °F</p>
                            </div>


                            <p>
                                Sunset: <FormatTime time={this.props.sunset}/>
                            </p>

                            <p>
                                Sunrise: <FormatTime time={this.props.sunrise}/>
                            </p>

                            <p className="card-text">
                                <small className="text-muted">
                                    Last updated on: <FormatDate date={this.props.date} />
                                </small>
                            </p>

                        </div>
                    </div>
                </div>
            </div>

        )
    }


}

export default Card;
