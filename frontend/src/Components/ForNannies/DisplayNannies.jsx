import React from 'react';
import nannyInfos from '../../../../backend/Models/nanny_profileinfos'

export default  NanniesAccount = () => (         
      <div className="displaynannnies">
          <ul>
          {nannyInfos.map((info,index )=> {
            return (
              
            <li key={index} className="profile">
              <div className="info" >{info.FirstName}</div>
              <div className="info" >{info.LastName}</div>
              <div className="info" >{info.email}</div>
              <div className="info" >{info.number}</div>
              <div className="info" >{info.about}</div>
              <select>
                  <option>full time</option>
                  <option>part time
                      <option>Morning</option>
                      <option>Afternoon</option>
                      <option>Evening</option>
                      <option>Night</option>
                  </option>
              </select>
            </li>
           )
           
          
          })}
            </ul>
        </div>
        
);
  


