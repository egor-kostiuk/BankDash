import { useLogin } from "/src/hooks/useLogin.js";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { AuthInputBox } from "/src/ui/components/molecules/AuthInputBox/AuthInputBox.jsx";
import { AuthButton } from "/src/ui/components/atoms/Buttons/AuthButton/AuthButton.jsx";

import "./Form.css";
import 'react-toastify/dist/ReactToastify.css';

export const LoginForm = () => {
  const { setEmail, setPassword, handleSubmit } = useLogin();

  return (
    <div className={'form-wrapper'}>
      <form className={'form'}>
        <h3>Login</h3>

        <AuthInputBox
          type={'Email'}
          onChange={(e) => setEmail(e.target.value)}
        />

        <AuthInputBox
          type={'Password'}
          onChange={(e) => setPassword(e.target.value)}
        />

        <AuthButton label={'Login'} onClick={handleSubmit}/>

        <p className="forgot-password text-right">
          Don't have an account ? <Link to="/sign-up">Sign Up</Link>
        </p>
      </form>
      <ToastContainer
        style={{top: '-100px'}}
        position={"top-center"}
        autoClose={2000}
        pauseOnHover={false}
      />
    </div>
  )
}