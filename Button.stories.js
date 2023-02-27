import React from "react";
import Button from "./Button";
import Center from "../Decorators_Folder/Center";

// export default hi ho ga:

export default {
    title: 'Button_Examples',
    component: Button,
    // decorators: [story => <Center>{story()}</Center>]
    // see preview.js file for decorators

}

export const Primary = () =>   <Button variant='primary'>Primary    </Button> 
export const Secondary = () => <Button variant='secondary'>Secondary </Button>
export const Success = () =>   <Button variant='success'>Success    </Button>
export const Danger = () =>    <Button variant='danger'>Danger      </Button>



// Below is the stories with args which itself known as props:
// 1) First of all, we have to design a template for the args stories:

const Template = (args) => <Button {...args} />

// 2) Second is to write a story name and bind it to the template like below:

export const Primary_Args = Template.bind({});

// 3) third is to write the arguments to the story in an object way.
Primary_Args.args = {
    variant: "primary",
    children : "Primary Argument Hun Mai"
}

export const Secondary_Args = Template.bind({});
Secondary_Args.args = {
    variant: "secondary",
    children: "Secondary Argument Hun Mai"
}

export const Success_Args = Template.bind({});
Success_Args.args = {
    variantColor: "green",
    children: "Success Button Here",
}

// Advantage of using args as a story is that we can copy the previous written stories
// and add new things as well:

export const Primary_Args_Long = Template.bind({});
Primary_Args_Long.args = {
    ...Primary_Args.args,
    children : "Primary Arguments Ka Bacha Hun Mai"
}

export const Danger_Arguments = Template.bind({});

Danger_Arguments.args = {
    variantColor : "brown",
    children : "Danger Argument Button"
}