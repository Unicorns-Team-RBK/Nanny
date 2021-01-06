export default function ParentsForm () {
    return (
        <div className="page">
        <h2>MY GOOD NANNY</h2>
        <form className="form" >
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
  
          <label htmlFor="register-display-name">Name</label>
          <input
            id="register-display-name"
            type="text"
          />
  
          <input type="submit" value="Register" />
        </form>
      </div>
    )
}
