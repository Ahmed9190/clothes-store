import "./sign-up.scss";
import { useState } from "react";
import FormInput from "../form-input/form-input";
import CustomButton from "./../custom-button/custom-button";
import { connect } from "react-redux";
import { signUpStart } from "../../redux/user/user.actions";

const initialSignUpData = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = ({ signUp }) => {
  const [signUpData, setSignUpData] = useState(initialSignUpData);

  const { displayName, email, password, confirmPassword } = signUpData;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) return alert("Password don't match");

    signUp({ email, password, displayName });
  };

  const handleChange = ({ target: { name, value } }) => {
    setSignUpData({ ...signUpData, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I don't have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          label={"Display Name"}
          onChange={handleChange}
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          label={"Email"}
          onChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          label={"Password"}
          onChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          label={"Confirm Password"}
          onChange={handleChange}
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUp: (signUpData) => dispatch(signUpStart(signUpData)),
});

export default connect(null, mapDispatchToProps)(SignUp);
