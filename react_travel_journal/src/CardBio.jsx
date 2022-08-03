import React  from "react";

function CardBio(props){

  return(
    <div className="card-bio">
      <h4 className="card-name">{props.cardName}</h4>
      <h6 className="card-designation">{props.cardDesi}</h6>
      <a href="#" className="card-website" target="_blank">{props.cardWeb}</a>
    </div>
  )
}

export default CardBio