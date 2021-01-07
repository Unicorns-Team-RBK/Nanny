export default function Login () {
  return (
  <div>
    <div className="page">
      <h2>Log in</h2>
      <form className="form" >
        <div>
        <label htmlFor="login-email">Email</label>
</div>
<div>
        <input
          id="login-email"
          type="email"
          
        />
       </div> 
      <div>
        <label htmlFor="login-password">Password</label>
        </div>
        <div>
        <input
          id="login-password"
          type="password"
          />
          </div>
        <div>
        <input type="submit" value="Log in" />
        </div>
      </form>
    </div>
    
    
    </div>
  )
}