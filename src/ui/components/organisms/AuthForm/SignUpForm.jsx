import { useSignUp } from '/src/hooks/useSignUp.js';
import { Link } from 'react-router-dom';

import { AuthInputBox } from "/src/ui/components/molecules/AuthInputBox/AuthInputBox.jsx";
import { AuthButton } from "/src/ui/components/atoms/Buttons/AuthButton/AuthButton.jsx";

import './Form.css';

export const SignUpForm = () => {
  const { setEmail, setPassword, setFirstName, handleRegister } = useSignUp();

  return (
    <div className={'form-wrapper'}>
      <form className={'form'}>
        <h3>Sign Up</h3>

        <AuthInputBox
          type={'Name'}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <AuthInputBox
          type={'Email address'}
          onChange={(e) => setEmail(e.target.value)}
        />

        <AuthInputBox
          type={'Password'}
          onChange={(e) => setPassword(e.target.value)}
        />

        <AuthButton label={'Sign Up'} onClick={handleRegister}/>

        <p>
          Already have an account ? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}