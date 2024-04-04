import './NavBoard.css'
import { AiOutlineNotification } from "react-icons/ai";
import { FaCommentDots } from "react-icons/fa";
import brd_logo from '../../components/assets/minuzaLogo.b43508d78235d137df349b86f2b8d151.svg'
const NavBoard = () => {
  return (
    <div className='brd__navBoard-header'>
            <div className="brd__navBoard-left">
               <img src={brd_logo} alt="" />
               <label htmlFor="">MINUZA</label>
            </div>
            <div className="brd__navBoard-middle">
               <input type="text"placeholder='Search' />
              <div className="middle-icons">|
              <FaCommentDots style={{ width: '50px' }} />
               <AiOutlineNotification style={{ width: '50px' }} />|
              </div> 
            </div>
            <div className="brd__navBoard-right">
               <div className="right-icons">
                  <label>U. Obed</label>
               <h>Student</h>
               </div>
              <div className="rounded-circle">

              </div>
            </div>
    </div>
  )
}

export default NavBoard