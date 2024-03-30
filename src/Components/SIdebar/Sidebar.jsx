import './Sidebar.css'
import logo1 from '../assets/logo-white-2.e579e7ef1e4f851302610f80524d3bfa svg.svg'
import logo2 from '../assets/auth-illus.fe62048c91dc5b8190dba257fd93df68.svg'
const Sidebar = () => {
  return (
    <div className='brd__sidebar'>
      <img className='myLogo' src={logo1} alt="" />
      <h2>Welcome</h2>
      <p>Provide your info and manage everything with a single tap</p>
      <img className='myBottomLogo' src={logo2} alt="" />
    </div>
  )
}

export default Sidebar