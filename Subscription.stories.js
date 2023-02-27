import React from "react";
import { Primary, Primary_Args } from "../Button/Button.stories";
import { Medium } from "../Input/Input.stories";


export default {
  title: "Form/Subscription",
};

export const Method = () => {
  return (
    <div style={{margin: '10px'}}>
      <label style={{color:"darkblue", fontSize:'26px', textDecorationLine:'underline'}}>Enter Your Sweet Name Here:</label>
      <Medium /> <br />

      <label style={{color:"darkblue", fontSize:'26px', textDecorationLine:'underline'}}>Enter Your Father Name Here:</label>
      <Medium /> <br />

      <label style={{color:"darkblue", fontSize:'26px', textDecorationLine:'underline'}}>Enter Your Nationality Below:</label>
      <Medium /> <br />

      <label style={{color:"darkblue", fontSize:'26px', textDecorationLine:'underline'}}>Enter Your Gender Here:</label>
      <Medium /> <br />

      <Primary_Args children={"Subnit Here"} />
    </div>
  );
};

/*
The above mentioned code is known as --> stories in stories...
*/
