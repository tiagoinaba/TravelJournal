import React from "react";
import locationPin from "../images/location-pin.png"

export default function Entry(props) {
    return (
        <div className="entry">
            <img src={props.imageUrl} className="entry__image"/>
            <div>
                <img src={locationPin}/>
                <span className="country">{props.location}</span>
                <a href={props.googleMapsUrl} className="view-on-gmaps" target="_blank">View on Google Maps</a>
                <h1 className="title">{props.title}</h1>
                <p className="bold">{props.startDate} - {props.endDate}</p>
                <p className="description">{props.description}</p>
            </div>
        </div>
    )
}