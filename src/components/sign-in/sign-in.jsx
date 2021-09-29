import { useState } from "react";
import FormInput from "./../form-input/form-input";

import "./sign-in.scss";
import CustomButton from "./../custom-button/custom-button";
import { signInWithGoogle } from "./../../firebase/firebase.utils";

const SignIn = () => {
  const [signInData, setSignInData] = useState({ email: "", password: "" });

  const handleChange = ({ target: { name, value } }) => {
    setSignInData({ ...signInData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    resetSigninData();
  };

  const resetSigninData = () => setSignInData({});

  return (
    <div className="sign-in">
      <h2 className="title">I have already an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          label="email"
          value={signInData?.email}
          required
          handleChange={handleChange}
        />
        <FormInput
          type="password"
          name="password"
          label="password"
          value={signInData?.password}
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
