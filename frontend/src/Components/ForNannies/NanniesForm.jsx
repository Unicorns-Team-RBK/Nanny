var NanniesForm = function () {
    return (
        <form>
            <div className="wrap">

                <div className="row">
                    <div className="columns text-center">
                        <h5>Nanny's Information</h5>
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
                        <h5>Tell us something about yourself</h5>

                    </div>
                    <div className="columns">
                        <textarea id="about_nanny" className="not required" placeholder="what are you good at ?why a parent will prefer you over other nannies ?" rows="10" cols="150" name="aboutnany"></textarea>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default NanniesForm;