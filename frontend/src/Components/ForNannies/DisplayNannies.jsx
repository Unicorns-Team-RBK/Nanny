import React from 'react';
import "../Css files/displayNannies.css"

const DisplayNannies =  (props)  =>{
  return (
    <div className="displaynannies">
      <h1 id="displaytitle">Scroll to see Our Nannies</h1>
    <ul>
    {props.nannyInfos.map((info,index ) =>{
      return (
      <li key={index} className="profile">
        <div>
        <img className="Image" src={info.Profile_picture} />
        </div>
        <div>
        <span id="displayn">{info.FirstName}</span>
        <span> </span>
        <span id="displayn">{info.LastName}</span>
        </div>
        <div>
        <button id="displaybtn" onClick={() => props.handleClick(index)}> See Nanny's profile</button>
        </div>
      </li>
    )
  }
    )}
    </ul>
  </div>
  )
}      
 
export default DisplayNannies;



