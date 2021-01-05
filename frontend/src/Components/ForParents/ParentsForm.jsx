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