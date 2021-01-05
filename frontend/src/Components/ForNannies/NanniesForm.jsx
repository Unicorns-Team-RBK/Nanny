//here is the form 'NanniesForm' that a nanny will fill when signing up. these inputs require her first name ,
//her last name ,her email address ,her phone number and her password .Then she can add some informations
//about herself for example her experiences , what she likes what she's good at why a parent will prefer her 
//over other nanies .


var NanniesForm = function () {
    return (
        <form>
            <div class="wrap">

                <div class="row">
                    <div class="columns text-center">
                        <h5>Nanny's Information</h5>
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
                        <h5>Tell us something about yourself</h5>

                    </div>
                    <div class="columns">
                        <textarea id="about_nanny" class="not required" placeholder="what are you good at ?why a parent will prefer you over other nannies ?" rows="10" cols="150" name="aboutnany"></textarea>
                    </div>
                </div>
            </div>
            <div class="wrap">
            <div class="row">
				<div class="columns text-center">
					<input class="btn submit" type="submit" value="Submit Application"></input>
				</div>
			</div>
            </div>
        </form>
    )
}

export default NanniesForm;