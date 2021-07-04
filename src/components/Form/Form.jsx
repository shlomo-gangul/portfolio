import React, { useRef, useEffect, useState, useReducer } from "react";
import "./Form.css";
import { TextField } from "@material-ui/core";
import emailjs from "emailjs-com";

// function reducer(state, action) {
//   switch (action.type) {
//     case "send":
//      useData().setData(state);
//       return
//     default:
//       return state;
//   }
// }

function sendEmail(e) {
//  dispatch('send')
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
  const [info, setInfo] = useState({});
  const FucosOnTextInput = useRef(null);
  //const [state, dispatch] = useReducer(reducer, { info });
  function setInformation(e) {
  //  dispatch('send')
    setInfo({ ...info, [e.target.name]: e.target.value });
  }
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
            onChange={setInformation}
            name="firstName"
            type="text"
            label="Your first name..."
            id="outlined-textarea"
            multiline
            variant="outlined"
          />
        </label>
        <label>
          <TextField
            name="lastName"
            onChange={setInformation}
            type="text"
            label="Your first last name..."
            id="outlined-textarea"
            multiline
            variant="outlined"
          />
        </label>
        <label>
          <TextField
            name="email"
            onChange={setInformation}
            type="text"
            label="Example@email.com"
            id="outlined-textarea"
            multiline
            variant="outlined"
          />
        </label>

        <label>
          <TextField
            name="Massge"
            onChange={setInformation}
            id="outlined-multiline-static"
            cols="30"
            label="Your Massge Goes Here..."
            multiline
            rows={4}
            variant="outlined"
          />
        </label>
        <button type="click">SEND</button>
      </form>
    </>
  );
};

export default Form;
