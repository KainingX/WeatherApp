import React, { Component } from 'react';

class Form extends Component{

    render(){
        return(
            <div>
                <form onSubmit={this.props.getWeather} className="form-row col-md-auto">
                    <div className="row">

                        <div className="col">
                            <input type="text" name="city" className="form-control" placeholder="Vancouver" onChange = {this.props.handleChange} />
                        </div>

                        <div className="col">
                            <input type="text" name="country" className="form-control" placeholder="Canada" onChange = {this.props.handleChange}/>
                        </div>

                        <input type="submit" className="btn btn-outline-primary" value="Check"/>

                    </div>
                </form>
            </div>



        )
    }
}

export default Form
