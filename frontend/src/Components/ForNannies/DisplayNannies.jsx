import React from 'react';


const DisplayNannies =  (props)  =>{
  return (
    <div className="displaynannies">
    <ul>
    {props.nannyInfos.map((info,index ) =>{
      return (
      <li key={index} className="profile">
        <img className="Image" src={info.Profile_picture} />
        <span className= "name" >{info.FirstName}</span>
        <span className= "name">{info.LastName}</span>
        <button onClick={() => props.handleClick(index)}> More Information </button>
      </li>
    )
  }
    )}
    </ul>
  </div>
  )
}      
 
export default DisplayNannies;



