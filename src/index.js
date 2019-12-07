import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Card from "./components/Card.js";
import FormatDate from "./components/FormatDate.js";


const key = '6d2010e0231d0e4ef59246cf9f5e7fdc';

class App extends Component{
    constructor(props) {
        super(props);

        this.state = {
            city: "",
            country: "",
            temperature_c: "",
            temperature_f: "",
            date:"",
            description:""
        };
    }


    getWeather = () => {
        //fetch api
        fetch('http://api.openweathermap.org/data/2.5/weather?id=6167865&units=metric&appid='+key)
        .then((response) => {         //convert to json format
            return response.json();
        })
        .then((data) => {
            this.setState({ //update state
                temperature_c: data.main.temp,
                temperature_f: ((data.main.temp)*(9/5)+32),
                city: data.name,
                country: data.sys.country,
                date: data.dt,
                description: data.weather[0].description
            })
        });


    }

    render(){
        return(
            <div>
            {this.getWeather()}
            <div>  City: {this.state.city}</div>
            <div> Country: {this.state.country}</div>
            <div>
            <span> Temperature: {this.state.temperature_c} C </span>
            <span> {this.state.temperature_f} F </span>
            </div>
            <FormatDate date={this.state.date} />
            <div> Description: {this.state.description} </div>
            </div>

            // <Card
            //     temperature={this.state.temperature}
            //     city={this.state.city}
            //     country={this.state.country}
            // />
        )
    };
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);
