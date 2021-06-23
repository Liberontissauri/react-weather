import React from "react"
import "./weatherDisplay.scss"

import svgClear from "../../images/svg_Clear.svg"
import svgHail from "../../images/svg_Hail.svg"
import svgHeavyCloud from "../../images/svg_Heavy_Cloud.svg"
import svgLightCloud from "../../images/svg_Light_Cloud.svg"
import svgRain from "../../images/svg_Rain.svg"
import svgShowers from "../../images/svg_Showers.svg"
import svgSleet from "../../images/svg_Sleet.svg"
import svgSnow from "../../images/svg_Snow.svg"
import svgThunderstorm from "../../images/svg_Thunderstorm.svg"

class WeatherDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weather_list: {
                "Snow": svgSnow,
                "Sleet": svgSleet,
                "Hail": svgHail,
                "Thunderstorm": svgThunderstorm,
                "Heavy Rain": svgRain,
                "Light Rain": svgRain,
                "Showers": svgShowers,
                "Heavy Cloud": svgHeavyCloud,
                "Light Cloud": svgLightCloud,
                "Clear": svgClear,
            },
            isCelsius: true,
        }
    }
    ToFarenheit(deg) {
        return Math.floor((deg * 1.8) + 32)
    }
    FormatDegrees(deg) {
        if(this.state.isCelsius) return deg + "ºC"
        return this.ToFarenheit(deg) + "ºF"
    }
    render() {
        return (
            <div class="display-div">
                <img alt="" class="display-img" src={this.state.weather_list[this.props.weather]}></img>
                <h1 class="display-deg" onClick={() => this.setState({isCelsius: !this.state.isCelsius})}>{this.FormatDegrees(this.props.degrees)}</h1>
                <h2 class="display-desc">{this.props.desc}</h2>
                <h3 class="display-date">{this.props.day} / {this.props.month}</h3>
            </div>
        )
    }
}

export default WeatherDisplay