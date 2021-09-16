import React, { Component } from 'react'
import './WeatherDetail.css'
import { apiKey } from './secret-file';
import AccordionItem from './AccordionItem';

export default class WeatherDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: props.city,
            apiData: null
        };

        this.goToOverview = this.goToOverview.bind(this);
    }

    componentDidMount() {
        console.log("Details pagina did mount");
        this.getAllWeatherData();
    }

    goToOverview() {
        console.log("I clicked a button");
        this.props.setOnDetailState({
            state: false
        });
    }

    getAllWeatherData() {
        // console.log(this.props);
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.props.latitude}&lon=${this.props.longitude}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                // this.state.apiData = data;
                this.setState({
                    apiData: data
                });
                console.log(this.state.apiData);
                console.log("Daily: " + this.state.apiData.daily[0].dt);
                console.log(new Date(this.state.apiData.daily[0].dt * 1000));
            });
    }

    getDay(unixTime) {
        let date = new Date(unixTime * 1000);
        return date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear();
    }

    render() {
        console.log("Render now");

        console.log(this.state.apiData);

        if (this.state.apiData == null) {
            console.log("First load");
            return null;
        }

        console.log("Na if");

        return (
            <div className="weather-detail">
                <nav>
                    <button onClick={this.goToOverview}>&lt;</button>
                    <h1>{this.props.city}</h1>
                </nav>

                <div className="accordion" id="accordion">
                    <AccordionItem element={0} getDay={this.getDay} state={this.state} headingId="headingOne" collapseId="collapseOne" expanded="true" show="show" collaped=""/>
                    {/* <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <span>{this.getDay(this.state.apiData.daily[0].dt)}</span>
                                <img src={"http://openweathermap.org/img/wn/" + this.state.apiData.daily[0].weather[0].icon + "@2x.png"}></img>
                                <span>{this.state.apiData.daily[0].temp.min}/{this.state.apiData.daily[0].temp.max}°C</span>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <table className="table table-borderless">
                                    <thead>
                                        <tr>
                                            <th scope="col"></th>
                                            <th scope="col">Morning</th>
                                            <th scope="col">Afternoon</th>
                                            <th scope="col">Evening</th>
                                            <th scope="col">Night</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">Temperature</th>
                                            <td>{this.state.apiData.daily[0].temp.morn}°C</td>
                                            <td>{this.state.apiData.daily[0].temp.day}°C</td>
                                            <td>{this.state.apiData.daily[0].temp.eve}°C</td>
                                            <td>{this.state.apiData.daily[0].temp.night}°C</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div> */}
                    <AccordionItem element={1} getDay={this.getDay} state={this.state} headingId="headingTwo" collapseId="collapseTwo" expanded="false" show="" collapsed="collapsed"/>
                    <AccordionItem element={2} getDay={this.getDay} state={this.state} headingId="headingThree" collapseId="collapseThree" expanded="false" show="" collapsed="collapsed"/>
                    <AccordionItem element={3} getDay={this.getDay} state={this.state} headingId="headingFour" collapseId="collapseFour" expanded="false" show="" collapsed="collapsed"/>
                    <AccordionItem element={4} getDay={this.getDay} state={this.state} headingId="headingFive" collapseId="collapseFive" expanded="false" show="" collapsed="collapsed"/>
                    <AccordionItem element={5} getDay={this.getDay} state={this.state} headingId="headingSix" collapseId="collapseSix" expanded="false" show="" collapsed="collapsed"/>
                    <AccordionItem element={6} getDay={this.getDay} state={this.state} headingId="headingSeven" collapseId="collapseSeven" expanded="false" show="" collapsed="collapsed"/>
                    <AccordionItem element={7} getDay={this.getDay} state={this.state} headingId="headingEight" collapseId="collapseEight" expanded="false" show="" collapsed="collapsed"/>
                    {/* <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <span>{this.getDay(this.state.apiData.daily[1].dt)}</span>
                                <img src={"http://openweathermap.org/img/wn/" + this.state.apiData.daily[1].weather[0].icon + "@2x.png"}></img>
                                <span>{this.state.apiData.daily[1].temp.min}/{this.state.apiData.daily[1].temp.max}°C</span>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <table className="table table-borderless">
                                    <thead>
                                        <tr>
                                            <th scope="col"></th>
                                            <th scope="col">Morning</th>
                                            <th scope="col">Afternoon</th>
                                            <th scope="col">Evening</th>
                                            <th scope="col">Night</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">Temperature</th>
                                            <td>{this.state.apiData.daily[1].temp.morn}°C</td>
                                            <td>{this.state.apiData.daily[1].temp.day}°C</td>
                                            <td>{this.state.apiData.daily[1].temp.eve}°C</td>
                                            <td>{this.state.apiData.daily[1].temp.night}°C</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <span>{this.getDay(this.state.apiData.daily[2].dt)}</span>
                                <img src={"http://openweathermap.org/img/wn/" + this.state.apiData.daily[2].weather[0].icon + "@2x.png"}></img>
                                <span>{this.state.apiData.daily[2].temp.min}/{this.state.apiData.daily[2].temp.max}°C</span>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <table className="table table-borderless">
                                    <thead>
                                        <tr>
                                            <th scope="col"></th>
                                            <th scope="col">Morning</th>
                                            <th scope="col">Afternoon</th>
                                            <th scope="col">Evening</th>
                                            <th scope="col">Night</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">Temperature</th>
                                            <td>{this.state.apiData.daily[2].temp.morn}°C</td>
                                            <td>{this.state.apiData.daily[2].temp.day}°C</td>
                                            <td>{this.state.apiData.daily[2].temp.eve}°C</td>
                                            <td>{this.state.apiData.daily[2].temp.night}°C</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                <span>{this.getDay(this.state.apiData.daily[3].dt)}</span>
                                <img src={"http://openweathermap.org/img/wn/" + this.state.apiData.daily[3].weather[0].icon + "@2x.png"}></img>
                                <span>{this.state.apiData.daily[3].temp.min}/{this.state.apiData.daily[3].temp.max}°C</span>
                            </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <table className="table table-borderless">
                                    <thead>
                                        <tr>
                                            <th scope="col"></th>
                                            <th scope="col">Morning</th>
                                            <th scope="col">Afternoon</th>
                                            <th scope="col">Evening</th>
                                            <th scope="col">Night</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">Temperature</th>
                                            <td>{this.state.apiData.daily[3].temp.morn}°C</td>
                                            <td>{this.state.apiData.daily[3].temp.day}°C</td>
                                            <td>{this.state.apiData.daily[3].temp.eve}°C</td>
                                            <td>{this.state.apiData.daily[3].temp.night}°C</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFive">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                <span>{this.getDay(this.state.apiData.daily[4].dt)}</span>
                                <img src={"http://openweathermap.org/img/wn/" + this.state.apiData.daily[4].weather[0].icon + "@2x.png"}></img>
                                <span>{this.state.apiData.daily[4].temp.min}/{this.state.apiData.daily[4].temp.max}°C</span>
                            </button>
                        </h2>
                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <table className="table table-borderless">
                                    <thead>
                                        <tr>
                                            <th scope="col"></th>
                                            <th scope="col">Morning</th>
                                            <th scope="col">Afternoon</th>
                                            <th scope="col">Evening</th>
                                            <th scope="col">Night</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">Temperature</th>
                                            <td>{this.state.apiData.daily[4].temp.morn}°C</td>
                                            <td>{this.state.apiData.daily[4].temp.day}°C</td>
                                            <td>{this.state.apiData.daily[4].temp.eve}°C</td>
                                            <td>{this.state.apiData.daily[4].temp.night}°C</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingSix">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                <span>{this.getDay(this.state.apiData.daily[5].dt)}</span>
                                <img src={"http://openweathermap.org/img/wn/" + this.state.apiData.daily[5].weather[0].icon + "@2x.png"}></img>
                                <span>{this.state.apiData.daily[5].temp.min}/{this.state.apiData.daily[5].temp.max}°C</span>
                            </button>
                        </h2>
                        <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <table className="table table-borderless">
                                    <thead>
                                        <tr>
                                            <th scope="col"></th>
                                            <th scope="col">Morning</th>
                                            <th scope="col">Afternoon</th>
                                            <th scope="col">Evening</th>
                                            <th scope="col">Night</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">Temperature</th>
                                            <td>{this.state.apiData.daily[5].temp.morn}°C</td>
                                            <td>{this.state.apiData.daily[5].temp.day}°C</td>
                                            <td>{this.state.apiData.daily[5].temp.eve}°C</td>
                                            <td>{this.state.apiData.daily[5].temp.night}°C</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingSeven">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                <span>{this.getDay(this.state.apiData.daily[6].dt)}</span>
                                <img src={"http://openweathermap.org/img/wn/" + this.state.apiData.daily[6].weather[0].icon + "@2x.png"}></img>
                                <span>{this.state.apiData.daily[6].temp.min}/{this.state.apiData.daily[6].temp.max}°C</span>
                            </button>
                        </h2>
                        <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <table className="table table-borderless">
                                    <thead>
                                        <tr>
                                            <th scope="col"></th>
                                            <th scope="col">Morning</th>
                                            <th scope="col">Afternoon</th>
                                            <th scope="col">Evening</th>
                                            <th scope="col">Night</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">Temperature</th>
                                            <td>{this.state.apiData.daily[6].temp.morn}°C</td>
                                            <td>{this.state.apiData.daily[6].temp.day}°C</td>
                                            <td>{this.state.apiData.daily[6].temp.eve}°C</td>
                                            <td>{this.state.apiData.daily[6].temp.night}°C</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingEight">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                <span>{this.getDay(this.state.apiData.daily[7].dt)}</span>
                                <img src={"http://openweathermap.org/img/wn/" + this.state.apiData.daily[7].weather[0].icon + "@2x.png"}></img>
                                <span>{this.state.apiData.daily[7].temp.min}/{this.state.apiData.daily[7].temp.max}°C</span>
                            </button>
                        </h2>
                        <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <table className="table table-borderless">
                                    <thead>
                                        <tr>
                                            <th scope="col"></th>
                                            <th scope="col">Morning</th>
                                            <th scope="col">Afternoon</th>
                                            <th scope="col">Evening</th>
                                            <th scope="col">Night</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">Temperature</th>
                                            <td>{this.state.apiData.daily[7].temp.morn}°C</td>
                                            <td>{this.state.apiData.daily[7].temp.day}°C</td>
                                            <td>{this.state.apiData.daily[7].temp.eve}°C</td>
                                            <td>{this.state.apiData.daily[7].temp.night}°C</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

        )
    }
}
