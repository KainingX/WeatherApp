import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Card from "./components/Card.js";
import FormatDate from "./components/FormatDate.js";
import Form from "./components/Form.js";
//import Welcome from "./components/Welcome.js";



const { getCode, getName } = require('country-list');

const key = '6d2010e0231d0e4ef59246cf9f5e7fdc';

class App extends Component{
    constructor(props) {
        super(props);

        this.state = {
            city: "Vancouver",
            country: "Canada",
            temperature_c: "",
            temperature_f: "",
            date:Date.now()/1000,
            description:"",
            sunset:Date.now()/1000,
            sunrise:Date.now()/1000
        };
    }

    //everytime text changes in the input box, change corresponding state
    handleChange = (event)=>{
        const value = event.target.value;

        this.setState({
            [event.target.name]: value
        });

    }



    getWeather = async (event) => {
        //prevent default refresh behaviour
        event.preventDefault();

        const city = this.state.city;
        const country = getCode(this.state.country);
        const url = 'http://api.openweathermap.org/data/2.5/weather?q='+ city +','+ country +'&units=metric&appid='+key;

        //fetch api
        const promise = await fetch(url);

        //convert to json format
        const data = await promise.json();

        //set new state
        await this.setState({
                temperature_c: Math.floor(data.main.temp),
                temperature_f: Math.floor((data.main.temp)*(9/5)+32),
                date: data.dt,
                description: data.weather[0].description,
                sunset:data.sys.sunset,
                sunrise:data.sys.sunrise
            });

    }

    render(){
        return(
            <div className="container">
                <div className="row justify-content-center">
                    <Form getWeather = {this.getWeather} handleChange = {this.handleChange}/>
                </div>
                <div className="row justify-content-center">
                    <Card

                        city={this.state.city}
                        country={this.state.country}
                        temperature_c={this.state.temperature_c}
                        temperature_f={this.state.temperature_f}
                        date={this.state.date}
                        description={this.state.description}
                        sunset={this.state.sunset}
                        sunrise={this.state.sunrise}
                    />
                </div>
            </div>
        )
    };
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);
