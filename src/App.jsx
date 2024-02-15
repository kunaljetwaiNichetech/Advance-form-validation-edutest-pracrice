import LoginForm from "./LoginForm/LoginForm"
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import OtpPage from "./LoginForm/OtpPage"
import SignInform from "./LoginForm/SignInform";
import OtpPage2 from "./LoginForm/Otp2";
import OTPPAGE from "./LoginForm/Otp3Copy";




function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/otp" element={<OtpPage />} />
          <Route path="/info" element={<SignInform/>} />
          <Route path="/otp2" element={<OtpPage2/>} />
          {/* <Route path="/otp3" element={<OTPPAGE/>} /> */}

        </Routes>
      </Router>
    </div>
  );
}
export default App
