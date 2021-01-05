var ParentForm = function () {
    return (
        <form>
            <div class="wrap">

                <div class="row">
                    <div class="columns text-center">
                        <h5>Parent Information</h5>
                    </div>
                </div>

                <div class="row">
                    <div class="columns special">
                        <input class="required" placeholder="First Name*" name="first_name" type="text"></input>
                    </div>
                    <div class="columns">
                        <input class="required" placeholder="Last Name*" name="last_name" type="text"></input>
                    </div>
                </div>

                <div class="row">
                    <div class="columns">
                        <input id="email" class="required email" placeholder="E-mail Address*" name="email_address" type="email"></input>
                    </div>
                    <div class="columns">
                        <input id="phone" class="required" placeholder="Phone Number*" name="phone" type="text"></input>
                    </div>
                </div>
            </div>

            <div class="wrap">
                <div class="row">
                    <div class="columns text-center">
                        <h5>Write your password</h5>
                    </div>
                    <div class="columns">
                        <input id="password" class="required" placeholder="your password*" name="password" type="password"></input>
                    </div>
                </div>
            </div>

            <div class="wrap">
                <div class="row">
                    <div class="columns text-center">
                        <h5>Notes</h5>

                    </div>
                    <div class="columns">
                        <textarea id="about_children" class="required" placeholder="want to precise something? What type of childcare are you looking for ?" rows="5" cols="150" name="aboutchild"></textarea>
                    </div>
                </div>
            </div>

            <div class="wrap">

                <div class="row">
                    <div class="columns text-center">
                        <h5>Home Address</h5>
                    </div>
                </div>

                <div class="row">
                    <div class="columns">
                        <input id="street" class="required" placeholder="Street*" name="street" type="text"></input>
                    </div>
                    <div class="columns">
                        <input id="apartment" placeholder="Apartment Number" name="apartment" type="text"></input>
                    </div>


                    <div class="columns">
                        <input id="city" class="required" placeholder="City*" name="city" type="text"></input>

                    </div>

                    <div class="columns">
                        <input class="required" placeholder="Zip Code*" type="text" name="zip"></input>
                    </div>
                </div>
                <div class="row">
				<div class="columns text-center">
					<input class="btn submit" type="submit" value="Submit Application"></input>
				</div>
			</div>
            </div>
        </form>
    )
}

export default ParentForm;