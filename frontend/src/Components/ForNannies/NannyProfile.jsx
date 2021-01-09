import react from "react";

const ProfileNanny = (props) => (
    <div className="Container">
        <img className="img" src={props.Info.Profile_picture}  />
        <span className= "name" >{props.Info.FirstName}</span>
        <span className= "name">{props.Info.LastName}</span>
        <div className="email"  >Email : {props.Info.email}</div>
        <div className="phoneNumber"  >Phone Number : {props.Info.phone_number}</div>
        <div className="region"  >Region : {props.Info.region}</div>
        <div className="free"  >Availibility : {props.Info.avaibility.day +", "+ props.Info.avaibility.time}</div>
        <div className="about">About me : {props.Info.about}</div>
    </div>
);

export default ProfileNanny;