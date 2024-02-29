import LoginForm from "./LoginForm/LoginForm"
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import OtpPage from "./LoginForm/OtpPage"
import SignInform from "./LoginForm/SignInform";
import OtpPage2 from "./LoginForm/Otp2";
import OTPPAGE from "./LoginForm/Otp3Copy";
import Acadamicinfo from "./AcadamicInfo/Acadamicinfo";
import RenderingAcadamic from "./AcadamicInfo/RenderingAcadamic";
import ProffesionalPage from "./ProffrsionalPage/ProffesionalPage";
import Finincialpage from "./Finincial/Finincialpage";
import FFFFFFFF from "./Finincial/FFFFFFFF";




function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/otp" element={<OtpPage />} />
          <Route path="/info" element={<SignInform/>} />
          <Route path="/otp2" element={<OtpPage2/>} />
          <Route path="/acadamicdetails" element={<Acadamicinfo/>} />
          <Route path="/render" element={<RenderingAcadamic/>} />
          <Route path="/Proffesional" element={<ProffesionalPage/>} />
          <Route path="/finincial" element={<Finincialpage/>} />
          <Route path="/F" element={<FFFFFFFF/>} />

          {/* <Route path="/otp3" element={<OTPPAGE/>} /> */}

        </Routes>
      </Router>
    </div>
  );
}
export default App
