import "./Home.css";
import circle_img from "../assets/circled-icons.1ef83d5e13d569591203cbab130e9328.svg";
import girl_img1 from "../assets/girl4_sm.2c5abc36bf8c80f19439.png";
import girl_img2 from "../assets/girl3_sm.ddf6a98d3e4e65f91952.png";
import card1_img from "../assets/step1icon.e328cb9e7f9cb17499e48396f5d6f560.svg";
import card2_img from "../assets/step2icon.5979e9c6ce0eee273b3ee0dc6d18255c.svg";
import card3_img from "../assets/step3icon.1b74ce0ff79cbb00fca239412a59dcee.svg";
import card4_img from "../assets/step4icon.928de4f2dab97eb3d298cdcc2c776ab6.svg";
const Home = () => {
  return (
    <div className="brd__home">
      <div className="brd__home-header">
        <div className="brd__home-header_left">
          <h2>HERE TO EMPOWER YOUR DREAMS</h2>
          <p>
            <strong>Development Bank of Rwanda</strong> through its Education financing
            department intervenes through education and infrastructure financing
            and efficient management of student loan and bursary schemes for
            tertiary education within and outside of Rwanda.
          </p>
          <span>
            <button className="self">Self-Declaration</button>
            <button className="create">Create Account</button>
          </span>
        </div>
        <div className="brd__home-header_right">
          <img className="circle-right" src={circle_img} alt="" />
          <img className="girl-right" src={girl_img1} alt="" />
        </div>
      </div>
      <div className="brd__home-cards">
        <div className="brd__home-card">
          <img src={card1_img} alt="" />
          <h2>Apply for the loan</h2>
          <p>
            A student is required to apply to sign a contract with BRD for
            disbursements after he/she is granted a loan by REB
          </p>
        </div>
        <div className="brd__home-card">
          <img src={card2_img} alt="" />
          <h2>Get Approved</h2>
          <p>
            After being granted a loan, a student then signs a contract with BRD
            for the disbursement and recovery arrangements.
          </p>
        </div>
        <div className="brd__home-card">
          <img src={card3_img} alt="" />
          <h2>Get & Manage your loan</h2>
          <p>
            BRD provides loans to students for higher education at both
            undergraduate and postgraduate level, in Rwanda and abroad.
          </p>
        </div>
        <div className="brd__home-card">
          <img src={card4_img} alt="" />
          <h2>Loan Declaration</h2>
          <p>
            Make a self declaration for your education loan and start making the
            payments to clear it and generate clearance certificate
          </p>
        </div>
      </div>
      <div className="brd__home-bursary">
        <div className="brd__home-bursary_left">
          <h2>Education Bursary</h2>
          <p>
            In October 2015, the Government of Rwanda gave the mandate of
            management of students’ loans and bursaries to BRD in compliance
            with the provisions of Law No 44/2015 of 14/09/2015 governing
            student loans and bursaries in Rwanda. This role was previously
            undertaken by the Ministry of Education. <br /> The Bank will play
            an important role in increasing access and improving quality of both
            basic and tertiary education. This will be achieved through
            investments in Education projects, Education savings program and
            efficient management of student loan and bursary schemes.
          </p>
        </div>
        <div className="brd__home-bursary_right">
          <img src={girl_img2} alt="" />
        </div>
      </div>

      <div className="brd__home-get_started">
        <button>Get Started</button>
      </div>
    </div>
  );
};

export default Home;
