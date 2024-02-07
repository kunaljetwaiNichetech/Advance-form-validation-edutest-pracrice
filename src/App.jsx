import LoginForm from "./LoginForm/LoginForm"
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import OtpPage from "./LoginForm/OtpPage"
import SignInform from "./LoginForm/SignInform";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/otp" element={<OtpPage />} />
          <Route path="/info" element={<SignInform/>} />
        </Routes>
      </Router>
    </div>
  );
}
export default App
