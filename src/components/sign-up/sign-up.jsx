import "./sign-up.scss";
import { useState } from "react";
import FormInput from "../form-input/form-input";
import CustomButton from "./../custom-button/custom-button";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import {
  auth,
  createUserProfileDocumentIfNotExistsAndGetUserRef,
} from "./../../firebase/firebase.utils";
import sha1 from "sha1";

const initialSignUpData = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [signUpData, setSignUpData] = useState(initialSignUpData);

  const { displayName, email, password, confirmPassword } = signUpData;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) return alert("Password don't match");
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        sha1(password)
      );

      await createUserProfileDocumentIfNotExistsAndGetUserRef(user, {
        displayName,
      });

      resetSignUpData();
    } catch (error) {
      console.error(error);
    }
  };

  const resetSignUpData = () => setSignUpData(initialSignUpData);

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

export default SignUp;
