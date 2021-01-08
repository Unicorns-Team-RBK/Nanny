import React from 'react';
import nannyInfos from '../../../../backend/Models/nanny_profileinfos'


import ProfileNanny from './NannyProfile'

function NanniesAccount  () {
  constructor(props) 
    super(props);
    this.state = {
      nannyInfos : nannyInfos
    }

 
  return (
    <div className="displaynannies">
    <ul>
    {this.state.nannyInfos.map((info,index )=> (
      <li key={index} className="profile">
        <img className="Image" src={info.Profile_picture} />
        <span className= "name" >{this.state.nannyInfo.FirstName}</span>
        <span className= "name">{this.state.nannyInfo.LastName}</span>
        <button onClick={ProfileNanny}>More Information</button>
      </li>
    )
    )}
    </ul>
  </div>
  )
}      
 
export default  NanniesAccount



