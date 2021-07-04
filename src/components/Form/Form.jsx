import React, { useRef, useEffect} from "react";
import "./Form.css";
import { TextField } from "@material-ui/core";
import emailjs from "emailjs-com";
import Input from "../Features/Input/Input";
import Button from "../Features/Button/Button";


function sendEmail(e) {
  console.log(e.target);
  emailjs
    .sendForm(
      "service_b0fghyi",
      "template_8bcydpm",
      e.target,
      "user_vrsa1EUJYBb7LyP4dXJTa"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
}
const Form = () => {
  const FucosOnTextInput = useRef(null);
  
  useEffect(() => {
    FucosOnTextInput.current.focus();
  }, []);
  return (
    <>
      <form className="Form" onSubmit={sendEmail}>
        <h1>Contact Me</h1>
        <label>
          <TextField
            inputRef={FucosOnTextInput}
            name="firstName"
            type="text"
            label="Your first name..."
            id="outlined-textarea"
            multiline
            variant="outlined"
            />
        </label>

        <Input name="lastName" type="text" label="Your first last name..." id="outlined-textarea" variant="outlined"/>
        <Input name="email" type="email" label="Example@email.com" id="outlined-textarea" variant="outlined"/>

        <label>
          <TextField
            name="Massge"
            id="outlined-multiline-static"
            cols="30"
            label="Your Massge Goes Here..."
            multiline
            rows={4}
            variant="outlined"
          />
        </label>
        <Button type="submit" text="SEND"/>
      </form>
    </>
  );
};

export default Form;
