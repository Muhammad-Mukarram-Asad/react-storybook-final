import React from "react";
import { Button } from "@chakra-ui/react";
import { EmailIcon, ArrowForwardIcon } from "@chakra-ui/icon";
import { action, actions } from "@storybook/addon-actions";

export default {
  title: "Chakra/Buttons",
  component: Button,
  argTypes: {
    children: { control: "text" },
    onClick: { action: "clicked" },
  },
};

// export const Simple_Btn = () =>
//   <Stack direction="row" spacing={4} align="center">
//     <Button colorScheme="blue">Button</Button>

//     <Button colorScheme="teal" variant="solid">
//       Button
//     </Button>
//     <Button colorScheme="teal" variant="outline">
//       Button
//     </Button>
//     <Button colorScheme="teal" variant="ghost">
//       Button
//     </Button>
//     <Button colorScheme="teal" variant="link">
//       Button
//     </Button>
//   </Stack>

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  colorScheme: "blue",
  outlineColor: "white",
  children: "Primary Btn Here",
};

export const Success = () => (
  <Button onClick={action("Click handler")} onDoubleClick={() => alert("Double Clicked By User")} colorScheme="green">
    Success{" "}
  </Button>
);
export const Success_Outlined = () => (
  <Button onClick={() => console.log("Button Clicked by User.")} bgColor="black" colorScheme="white" outlineColor="green">
    Success{" "}
  </Button>
);

export const Danger = () => (
  <Button {...actions("onClick", "onMouseOver")} colorScheme="red">
    {" "}
    Danger{" "}
  </Button>
);

// export const Button_Icon_Left = () => {
// <Button leftIcon={<EmailIcon />} colorScheme="teal" variant="solid">
//       Email
//     </Button>
// }

// export const Button_Icon_Right = () => {
//   <Button
//       rightIcon={<ArrowForwardIcon />}
//       colorScheme="teal"
//       variant="outline"
//     >
//       Call us
//     </Button>

// }



{
  /* Button with icons on their left or right side */
}
//   <Stack direction="row" spacing={4}>
//     <Button leftIcon={<EmailIcon />} colorScheme="teal" variant="solid">
//       Email
//     </Button>
//     <Button
//       rightIcon={<ArrowForwardIcon />}
//       colorScheme="teal"
//       variant="outline"
//     >
//       Call us
//     </Button>
//   </Stack>
