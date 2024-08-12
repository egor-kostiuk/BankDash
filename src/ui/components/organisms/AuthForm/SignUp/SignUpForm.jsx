import {useSignUp} from './SignUpForm.js';
import {Link} from 'react-router-dom';

import {InputBox} from "/src/ui/components/molecules/InputBox/InputBox.jsx";
import {AuthButton} from "/src/ui/components/atoms/AuthButton/AuthButton.jsx";

import '../Form.css';

export const SignUpForm = () => {
  const {setEmail, setPassword, setFirstName, handleRegister} = useSignUp();

  return (
    <div className={'form-wrapper'}>
      <form className={'form'}>
        <h3>Sign Up</h3>

        <InputBox
          type={'Name'}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <InputBox
          type={'Email address'}
          onChange={(e) => setEmail(e.target.value)}
        />

        <InputBox
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