import { useState } from "react";
import FormInput from "./../form-input/form-input";

import "./sign-in.scss";
import CustomButton from "./../custom-button/custom-button";
import { auth, signInWithGoogle } from "./../../firebase/firebase.utils";
import { signInWithEmailAndPassword } from "firebase/auth";
import sha1 from "sha1";

const initialSignInData = {
  email: "",
  password: "",
};
const SignIn = () => {
  const [signInData, setSignInData] = useState(initialSignInData);

  const { email, password } = signInData;

  const handleChange = ({ target: { name, value } }) => {
    setSignInData({ ...signInData, [name]: value });
  };

  const onClickSignInWithGoogle = (e) => {
    e.preventDefault();
    signInWithGoogle();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(email, password);
      await signInWithEmailAndPassword(auth, email, sha1(password));
      resetSigninData();
    } catch (error) {
      console.error(error);
    }
  };

  const resetSigninData = () => setSignInData(initialSignInData);

  return (
    <div className="sign-in">
      <h2 className="title">I have already an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          label="email"
          value={email}
          required
          handleChange={handleChange}
        />
        <FormInput
          type="password"
          name="password"
          label="password"
          value={password}
          required
          handleChange={handleChange}
        />

        <div className="buttons">
          <CustomButton type="submit">SIGN IN</CustomButton>
          <CustomButton onClick={onClickSignInWithGoogle} isGoogleSignIn>
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
