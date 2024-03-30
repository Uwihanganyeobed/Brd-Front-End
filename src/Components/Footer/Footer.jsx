import "./Footer.css";
import img3 from "../assets/brdlogo.d43cf27a0f2a191d8eee1b184a1d2356.svg";
import { FaSquareTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { FaFacebookSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="brd__footer">
      <div className="brd__footer-up">
        <div className="brd__footer-left">
          <h3>Powered By:</h3>
          <img src={img3} alt="" />
        </div>
        <div className="brd__footer-middle">
          <h3>Quick Links:</h3>
          <a href="/">
            <label>Home</label>
          </a>
          <a href="/">
            <label>NID Change Request</label>
          </a>
          <a href="/">
            <label>Declaration</label>
          </a>
          <a href="/">
            <label>Terms and Conditions</label>
          </a>
        </div>
        <div className="brd__footer-right">
          <h3>Get intouch</h3>
          <span>
            <label htmlFor="">Questions or feedback? </label>
            <br />
            <label htmlFor=""> We‘d love to hear from you </label>
          </span>
          <div className="findUs">
            <a href="/">
              <FaSquareTwitter className="find" />
            </a>
            <a href="/">
              <CiLinkedin className="find" />
            </a>
            <a href="/">
              <FaFacebookSquare className="find" />
            </a>
            <a href="/">
              <CiInstagram className="find" />
            </a>
          </div>
        </div>
      </div>
      <div className="brd__footer-down">
        <label>BRD - Minuza © 2024 All rights reserved</label>
      </div>
    </div>
  );
};

export default Footer;
