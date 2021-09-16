import React from 'react'

export default function AccordionItem(props) {

    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id={props.headingId}>
                <button className={"accordion-button " + props.collapsed} type="button" data-bs-toggle="collapse" data-bs-target={"#" + props.collapseId} aria-expanded={props.expanded} aria-controls={props.collapseId}>
                    <span>{props.getDay(props.state.apiData.daily[props.element].dt)}</span>
                    <img src={"http://openweathermap.org/img/wn/" + props.state.apiData.daily[props.element].weather[0].icon + "@2x.png"}></img>
                    <span>{Math.round(props.state.apiData.daily[props.element].temp.min)}/{Math.round(props.state.apiData.daily[props.element].temp.max) + "°C"}</span>
                </button>
            </h2>
            <div id={props.collapseId} className={"accordion-collapse collapse " + props.show} aria-labelledby={props.headingId} data-bs-parent="#accordion">
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
                                <td>{Math.round(props.state.apiData.daily[props.element].temp.morn) + "°C"}</td>
                                <td>{Math.round(props.state.apiData.daily[props.element].temp.day) + "°C"}</td>
                                <td>{Math.round(props.state.apiData.daily[props.element].temp.eve) + "°C"}</td>
                                <td>{Math.round(props.state.apiData.daily[props.element].temp.night) + "°C"}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
