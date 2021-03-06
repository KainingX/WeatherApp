import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Card from "./components/Card.js";
import FormatDate from "./components/FormatDate.js";
import Form from "./components/Form.js";
import Welcome from "./components/Welcome.js";




const { getCode, getName } = require('country-list');

const key = '6d2010e0231d0e4ef59246cf9f5e7fdc';

class App extends Component{
    constructor() {
        super();
        this.state = {
            city: "Vancouver",
            country: "Canada",
            temperature_c: "",
            temperature_f: "",
            date:Date.now()/1000,
            description:"",
            sunset:Date.now()/1000,
            sunrise:Date.now()/1000,
            image_url:"https://d13k13wj6adfdf.cloudfront.net/urban_areas/vancouver-3160f806cf.jpg"
        };
    }


    // Everytime when text changes in the input box, changes the value in corresponding state
    // Uses arrow function in order to bind to the App component
    handleChange = (event)=>{

        const value = event.target.value;

        this.setState({
            [event.target.name]: value
        });


    }

    // Get weather and image from API
    // Uses arraw function to bind to this function to the App component
    // make sure that they can use this.props this.state
    getWeather = async (event) => {

        //prevent default refresh behaviour from the submit button
        event.preventDefault();

        const city = this.state.city;
        const city_lcase = this.state.city.toLowerCase();
        const country = getCode(this.state.country);
        const url = 'http://api.openweathermap.org/data/2.5/weather?q='+ city +','+ country +'&units=metric&appid='+key;
        const url_img = 'https://api.teleport.org/api/urban_areas/slug:' + city_lcase +'/images/';

        // Fetch and then convert the response into json format
        // await makes the function pause until a result is returned by promise
        // pause the function until get a result from the server
        // Promise.all return a single promise when all promises are fulfilled
        let data = await Promise.all([
            //fetch returns a promise. When it is fufilled, it will return a http response,
            //need to parse into json
            fetch(url).then((response) => response.json()),
            fetch(url_img).then((response) => response.json())
        ]);


        //set new state
        await this.setState({
            temperature_c: Math.floor(data[0].main.temp),
            temperature_f: Math.floor((data[0].main.temp)*(9/5)+32),
            date: data[0].dt,
            description: data[0].weather[0].description,
            sunset:data[0].sys.sunset,
            sunrise:data[0].sys.sunrise,
            image_url:data[1].photos[0].image.mobile

        });

    }

    render(){
        return(
            <div>
                <Welcome />
                <div className="container">

                    <div className="row justify-content-center mt-3">

                        <Form getWeather = {this.getWeather} handleChange = {this.handleChange}/>
                    </div>

                    <div className="row justify-content-center mt-3">

                        <Card
                            city={this.state.city}
                            country={this.state.country}
                            temperature_c={this.state.temperature_c}
                            temperature_f={this.state.temperature_f}
                            date={this.state.date}
                            description={this.state.description}
                            sunset={this.state.sunset}
                            sunrise={this.state.sunrise}
                            image_url={this.state.image_url}
                        />
                    </div>
                </div>
            </div>

        )
    };
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);
