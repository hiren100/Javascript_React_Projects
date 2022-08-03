import React  from "react";


function Card(props){

  return(
    <div className="card" id={props.item.id}>
      <div className="card-img">
        <img src={props.item.image} alt=""/>
      </div>
      <div className="card-content">
         <div className="card-top">
            <span><i className="fa fa-map-marker" aria-hidden="true"></i> <span className="card-location">{props.item.location}</span></span>
            <a href={props.item.links.googleMaps} className="card-map-link" target="_blank">View on Google Maps</a>
         </div>
         <h4>{props.item.title}</h4>

         <h6>{props.item.dates.start} - {props.item.dates.end}</h6>
          <p>{props.item.description}</p>
      </div>
    </div>
  )
}

export default Card