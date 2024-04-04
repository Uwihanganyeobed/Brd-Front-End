import './Header.css'
// import { BiSolidHide } from "react-icons/bi";
const Header = () => {
  return (
    <div className='brd__header'>
      <h1>Login</h1>
      <h4>Login with the credentials that you used during the registration</h4>
      <div className="brd__form">
      <p>Email or Phone</p>
      <input type="text"placeholder='yourname@example.com'/>
      {/* {<BiSolidHide/>} */}
      <p>Password</p>
      <input type="text"placeholder='password' />
      <span className='all-box'>
        <label>
        <input type="checkbox" />
        <label htmlFor="">Keep me logged in</label>
        </label>
        <p>Forgot password?</p>
      </span>
      <button>Log In</button>
      <hr />
      </div>
      <span className='brd_below'>
      <p>Don't have an account? </p>
      <label htmlFor="">Sign Up</label>
      </span>
 
    </div>
  )
}

export default Header