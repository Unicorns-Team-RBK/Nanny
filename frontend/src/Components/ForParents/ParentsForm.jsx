export default function ParentsForm () {
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
          />
           <label htmlFor="register-display-name">Last name</label>
          <input
            id="register-display-name"
            type="text"
          />
          <label htmlFor="register-email">Email</label>
          <input
            id="register-email"
            type="email"
          />
  
          <label htmlFor="register-password">Password</label>
          <input
            id="register-password"
            type="password"
          />
          <input
            type="password"
            placeholder="Verify password"
          />
  
          <input type="submit" value="Register" />
        </form>
      </div>
    )
}
