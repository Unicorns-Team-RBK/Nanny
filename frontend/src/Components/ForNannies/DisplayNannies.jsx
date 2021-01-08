import React from 'react';

export default  NanniesAccount = (props) => (         
      <div className="account">
          <ul>
          {props.nannyInfos.map((info,index )=> {
            return (
              
            <li key={index} className="profile">
              <div className="info" >{info.FirstName}</div>
              <div className="info" >{info.lastName}</div>
              <div className="info" >{info.email}</div>
              <div className="info" >{info.number}</div>
              <div className="info" >{info.about}</div>
              <select>
                  <option>full time</option>
                  <option>part time
                      <option>Morning</option>
                      <option>Afternoon</option>
                      <option>Night</option>
                  </option>
              </select>
            </li>
           )
           
          
          })}
            </ul>
        </div>
        
);
  


