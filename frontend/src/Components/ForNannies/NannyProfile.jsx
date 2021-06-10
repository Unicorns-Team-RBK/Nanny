import "../Css files/ProfileNanny.css"
const ProfileNanny = (props) => (
    <div className="Container mt-5">
        <h1 className="title text-center pt-5">Nanny's Profile</h1>
        <div className="container">
            <div className="row py-4">
                <div className="col-lg-6 py-3">
                    <img className="img-fluid" src={props.Info.Profile_picture}  />
                </div>

                <div className="col-lg-6 py-3">
                    <h4 className="fw-bold pt-4 p-2 fs-3">{`${props.Info.FirstName} ${props.Info.LastName}`}</h4>
                    <div className="p-2 fs-5"  ><span className="fw-bold">Email :</span> {props.Info.email}</div>
        <div className="p-2 fs-5"  ><span className="fw-bold">Phone Number :</span> {props.Info.phone_number}</div>
        <div className="p-2 fs-5"  ><span className="fw-bold">Region :</span> {props.Info.region}</div>
        <div className="p-2 fs-5"  ><span className="fw-bold">Availibility :</span>{props.Info.avaibility.day +", "+ props.Info.avaibility.time}</div>
        <div className="p-2 fs-5"><span className="fw-bold">About me :</span> {props.Info.about}</div>
                </div>

            </div>
            
        </div>
        {/* <div>
        <img className="img" src={props.Info.Profile_picture}  />
        </div>
        <span className= "name" >{props.Info.FirstName}</span>
        <span> </span>
        <span className= "name">{props.Info.LastName}</span>
        <div className="email"  >Email : {props.Info.email}</div>
        <div className="phoneNumber"  >Phone Number : {props.Info.phone_number}</div>
        <div className="region"  >Region : {props.Info.region}</div>
        <div className="free"  >Availibility : {props.Info.avaibility.day +", "+ props.Info.avaibility.time}</div>
        <div className="about">About me : {props.Info.about}</div> */}
    </div>
);

export default ProfileNanny;