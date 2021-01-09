import react from "react";

const ProfileNanny = (props) => (
    <div className="Container">
        {/* <img className="img" src={props.nannyInfo.Profile_picture}  /> */}
        <span className= "name" >{props.nannyInfo.FirstName}</span>
        <span className= "name">{props.nannyInfo.LastName}</span>
        <div className="email"  >`Email : ${props.nannyInfo.email}`</div>
        <div className="phoneNumber"  >`Phone Number : ${props.nannyInfo.phone_number}`</div>
        <div className="region"  >`Region : ${props.nannyInfo.region}`</div>
        <div className="free"  >`Availibility : ${props.nannyInfo.avaibility.day} + ', ' + ${props.nannyInfo.email}`</div>
        <div className="about">`About me : ${props.nannyInfo.about}`</div>
    </div>
);

export default ProfileNanny;