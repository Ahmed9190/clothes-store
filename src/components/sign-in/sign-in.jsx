import { useState } from "react";
import FormInput from "./../form-input/form-input";

import "./sign-in.scss";
import CustomButton from "./../custom-button/custom-button";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";
import { connect } from "react-redux";

const initialSignInData = {
  email: "",
  password: "",
};
const SignIn = ({ googleSignInStart, emailSignInStart }) => {
  const [signInData, setSignInData] = useState(initialSignInData);

  const { email, password } = signInData;

  const handleChange = ({ target: { name, value } }) => {
    setSignInData({ ...signInData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    emailSignInStart(email, password);
    // await signInWithEmailAndPassword(auth, email, sha1(password));
    // resetSigninData();
  };

  // const resetSigninData = () => setSignInData(initialSignInData);

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
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => {
    return dispatch(emailSignInStart({ email, password }));
  },
});

export default connect(null, mapDispatchToProps)(SignIn);
