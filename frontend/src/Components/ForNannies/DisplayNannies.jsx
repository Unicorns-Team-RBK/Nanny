import React from 'react';
import "../Css files/displayNannies.css"

const DisplayNannies =  (props)  =>{
  return (
    <div className="displaynannies">
      <h1 className="text-center py-5 title">Scroll to see Our Nannies</h1>
      <div className="container">
        <div className="row">
          {props.nannyInfos.map((info,index)=>{
            return(
              <div className="col-lg-4 text-center mb-4">
                <div class="card">
                <div class="card-body">
                  <img src={info.Profile_picture} class="img-fluid" />
                </div>
              </div>
              <h4>{`${info.FirstName} ${info.LastName}`}</h4>
              <button className="btn2" onClick={() => props.handleClick(index)}> See Nanny's profile</button>
              </div>
            )
          })}
        </div>
      </div>
    {/* <ul>
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
    </ul> */}
  </div>
  )
}      
 
export default DisplayNannies;



