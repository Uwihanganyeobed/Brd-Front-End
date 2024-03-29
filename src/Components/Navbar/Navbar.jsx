import './Navbar.css'
const Navbar = () => {
  return (
    <div className='brd__navbar'>
    <ul className='brd__links'>
      <a href="#0"><li>Home</li></a>
      <a href="#1"><li>NID Change</li></a>
      <a href="#2"><li>Declaration</li></a>
    </ul>
    <button>Signup</button>
    </div>
  )
}

export default Navbar