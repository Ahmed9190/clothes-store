import { useState } from "react";
import FormInput from "./../form-input/form-input";

import "./sign-in.scss";
import CustomButton from "./../custom-button/custom-button";
import { signInWithGoogle } from "./../../firebase/firebase.utils";

const SignIn = () => {
  const [signinData, setSigninData] = useState({});

  const handleChange = ({ target: { name, value } }) => {
    setSigninData({ ...signinData, [name]: value });
  };

  const handleSubmit = ({ preventDefault }) => {
    preventDefault();
    resetSigninData();
  };

  const resetSigninData = () => setSigninData({});

  return (
    <div className="sign-in">
      <h2 className="title">I have already an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          label="email"
          value={signinData?.email}
          required
          handleChange={handleChange}
        />
        <FormInput
          type="password"
          name="password"
          label="password"
          value={signinData?.password}
          required
          handleChange={handleChange}
        />

        <div className="buttons">
          <CustomButton type="submit">Submit Form</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
