export default function Login () {
  return (
  <div>
    <div className="page">
      <h2>Log in</h2>
      <form className="form" >
        <label htmlFor="login-email">Email</label>
        <input
          id="login-email"
          type="email"
          
        />
        <label htmlFor="login-password">Password</label>
        <input
          id="login-password"
          type="password"
          
        />
        <input type="submit" value="Log in" />
      </form>
    </div>
    <div class="notice">
    <p>
      Not a member?
      <br>
      Sign up as a <a href="localhost:3000/ParentsForm">Parent</a> or <a href="localhost:3000/NanniesForm">Sitter</a>
      </br></p>
    </div>
    </div>
  )
}