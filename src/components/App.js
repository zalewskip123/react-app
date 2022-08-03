import React, { Component } from "react";
import Form from "./Form";
import Result from "./Result";

import "./App.css";
const APIKEY = "097e1f723196a807aa37a032b697916b";

class App extends Component {
    state = {
        value: "",
        date: "",
        city: "",
        sunrise: "",
        sunset: "",
        temp: "",
        pressure: "",
        wind: "",
        err: false
    }

    /*
    handleCitySubmit = (e) => {
        e.preventDefault()
        const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIKEY}&units=metric`;
        fetch(API)
            .then(response => {
                if(response.ok) {
                    return response
                }
                throw Error("Nie udało się")
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                const time = new Date().toLocaleString();
                this.setState(state => ({
                    err: false,
                    date: time,
                    sunrise: data.sys.sunrise,
                    sunset: data.sys.sunset,
                    temp: data.main.temp,
                    pressure: data.main.pressure,
                    wind: data.wind.speed,
                    city: state.value
                }))
            })
            .catch(err => {
                console.log(err);
                this.setState(state => ({
                    err: true,
                    city: state.value
                }))
            })

    }
    */

    handleInputChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Poprzednia wartość " + prevState.value);
        console.log("Aktualna wartość " + this.state.value);

        if (prevState.value != this.state.value) {
            const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIKEY}&units=metric`;
        fetch(API)
            .then(response => {
                console.clear();
                if(response.ok) {
                    return response
                }
                throw Error("Nie udało się")
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                const time = new Date().toLocaleString();
                this.setState(state => ({
                    err: false,
                    date: time,
                    sunrise: data.sys.sunrise,
                    sunset: data.sys.sunset,
                    temp: data.main.temp,
                    pressure: data.main.pressure,
                    wind: data.wind.speed,
                    city: state.value
                }))
            })
            .catch(err => {
                this.setState(state => ({
                    err: true,
                    city: state.value
                }))
            })
        }
    }

    render () {
        return (
            <div className="App">
                <Form value={this.state.value} change={this.handleInputChange} />
                <Result weather={this.state} />
            </div>
        )
    }
}

export default App;