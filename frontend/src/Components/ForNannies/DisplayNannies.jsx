import React from 'react';
import nannyInfos from '../../../../backend/Models/nanny_profileinfos'

export default  NanniesAccount = () => (         
      <div className="displaynannies">
          <ul>
          {nannyInfos.map((info,index )=> {
            return (
              
            <li key={index} className="profile">
              <div className="info" >{info.FirstName}</div>
              <div className="info" >{info.LastName}</div>
              <div className="info" >{info.email}</div>
              <div className="info" >{info.number}</div>
              <div className="info" >{info.about}</div>
           
            </li>
           )
           
          
          })}
            </ul>
        </div>
        
);
  


