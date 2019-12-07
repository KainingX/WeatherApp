import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Card from "./components/Card.js";


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

    // convertTime(timestamp){
    //     let time = new Date(timestamp * 1000);
    //     let day = time.getDay();
    //     let month = time.getMonth();
    //     let year = time.getFullYear();
    //
    //     let date = day+'-'+month+'-'+year;
    //
    //     return date;
    // }

    getWeather = () => {
        //fetch api
        let response = fetch('http://api.openweathermap.org/data/2.5/weather?id=6167865&units=metric&appid='+key);

        //convert to json format
        let data = (response) => {
            return response.json();
        };

        //update state
        (data) => {
            this.setState({
                temperature_c: data.main.temp,
                temperature_f: ((data.main.temp)*(9/5)+32),
                city: data.name,
                country: data.sys.country,
                date: data.dt,
                description: data.weather[0].description
            })
        };
    }

    render(){
        return(
            <div>
            {this.getWeather()}
            <div> <span> City: {this.state.city}</span> </div>
            <div> <span> Country: {this.state.country}</span> </div>
            <div>
            <span> Temperature: {this.state.temperature} C </span>
            <span> {this.state.temperature} F </span>
            </div>
            <div> <span> Date: {this.state.date}</span> </div>
            <div> <span> Description: {this.state.description}</span> </div>
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
