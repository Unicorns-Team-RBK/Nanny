<<<<<<< HEAD
var ParentForm = function () {
    return (
        <form>
            <div className="wrap">

                <div className="row">
                    <div className="columns text-center">
                        <h5>Parent Information</h5>
                    </div>
                </div>

                <div className="row">
                    <div className="columns special">
                        <input className="required" placeholder="First Name*" name="first_name" type="text"></input>
                    </div>
                    <div className="columns">
                        <input className="required" placeholder="Last Name*" name="last_name" type="text"></input>
                    </div>
                </div>

                <div className="row">
                    <div className="columns">
                        <input id="email" className="required email" placeholder="E-mail Address*" name="email_address" type="email"></input>
                    </div>
                    <div className="columns">
                        <input id="phone" className="required" placeholder="Phone Number*" name="phone" type="text"></input>
                    </div>
                </div>
            </div>

            <div className="wrap">
                <div className="row">
                    <div className="columns text-center">
                        <h5>Write your password</h5>
                    </div>
                    <div className="columns">
                        <input id="password" className="required" placeholder="your password*" name="password" type="password"></input>
                    </div>
                </div>
            </div>

            <div className="wrap">
                <div className="row">
                    <div className="columns text-center">
                        <h5>Notes</h5>

                    </div>
                    <div className="columns">
                        <textarea id="about_children" className="required" placeholder="want to precise something? What type of childcare are you looking for ?" rows="5" cols="150" name="aboutchild"></textarea>
                    </div>
                </div>
            </div>

            <div className="wrap">

                <div className="row">
                    <div className="columns text-center">
                        <h5>Home Address</h5>
                    </div>
                </div>

                <div className="row">
                    <div className="columns">
                        <input id="street" className="required" placeholder="Street*" name="street" type="text"></input>
                    </div>
                    <div className="columns">
                        <input id="apartment" placeholder="Apartment Number" name="apartment" type="text"></input>
                    </div>


                    <div className="columns">
                        <input id="city" className="required" placeholder="City*" name="city" type="text"></input>

                    </div>

                    <div className="columns">
                        <input className="required" placeholder="Zip Code*" type="text" name="zip"></input>
                    </div>
                </div>
                <div className="row">
				<div className="columns text-center">
					<input className="btn submit" type="submit" value="Submit Application"></input>
				</div>
			</div>
            </div>
        </form>
    )
}

export default ParentForm;
=======
import React, { useState} from "react";
export default function ParentsForm () {
  const [displayFirstName, setDisplayFirstName] = useState();
  const [displayLastName, setDisplayLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
    return (
        <div className="page">
        <h2>WELCOME TO MY GOOD NANNY</h2>
        <h4>Parents: create your account </h4>
        <p class="registration__info">Already have an account? <a href="#">Log in</a>.</p>
        <form className="form" >
          <label htmlFor="register-display-name">First Name</label>
          <input
            id="register-display-name"
            type="text"
            onChange={(e) => setDisplayFirstName(e.target.value)}
          />
           <label htmlFor="register-display-name">Last name</label>
          <input
            id="register-display-name"
            type="text"
            onChange={(e) => setDisplayLastName(e.target.value)}
          />
          <label htmlFor="register-email">Email</label>
          <input
            id="register-email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
  
          <label htmlFor="register-password">Password</label>
          <input
            id="register-password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Verify password"
            onChange={(e) => setPasswordCheck(e.target.value)}
          />
  
          <input type="submit" value="Register" />
        </form>
      </div>
    )
}
>>>>>>> a5eac5f2ba50745981366edabb38b01f859e6ef1
