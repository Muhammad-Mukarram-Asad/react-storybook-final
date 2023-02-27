import React, { useState } from "react";
import "./Button.css";

function Button(props) {
  const [value, setValue] = useState("");
  const [text, setText] = useState("paragraph");
  const [length, setLength] = useState(10);
  const { variant = "primary", children, ...rest } = props;

  const handleFocus = () => {
    let input_field = document.getElementById("input");
    input_field.style.backgroundColor = "blue";
    input_field.style.color = "white";
  };
  return (
    <>
      {" "}
      {/* <div className="lab_inp_div">
        <label
          style={{ color: "black", fontSize: "50px", fontWeight: "bolder" }}
        >
          Name:
        </label>
        <input
          className="input_box"
          type="text"
          placeholder="Enter Your Name:"
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
            // action("handleChange");
            if (value.length >= 10) {
              setText("You are crossing the maximum limit. Plz be careful");
              setLength(value.length);
            } else {
              setText("paragraph");
            }
          }}
          onClick={handleFocus}
          // onBlur={action("handleBlur")}
        />
      
      <p
        style={{
          color: length == 10 ? "black" : "red",
          fontSize: "25px",
          backgroundColor: "white",
          width: "max-content",
        }}
      >
        {text}{" "}
      </p>
      </div> */}
      <button className={`button ${variant}`} {...rest}>
        {children}
      </button>
    </>
  );
}

export default Button;

// Different ways to run storybook:

// npm run storybook
// yarn storybook

// For Building a Storybook, use the following command:

// npm run build storybook
