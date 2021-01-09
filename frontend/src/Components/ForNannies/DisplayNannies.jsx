import React from 'react';


const DisplayNannies =  (props)  =>{
  return (
    <div className="displaynannies">
    <ul>
    {props.nannyInfos.map((info,index ) =>{
      return (
      <li key={index} className="profile">
        <div>
        <img className="Image" src={info.Profile_picture} />
        </div>
        <div>
        <span className= "name" >{info.FirstName}</span>
        <span className= "name">{info.LastName}</span>
        </div>
        <div>
        <button onClick={() => props.handleClick(index)}> More Information </button>
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



