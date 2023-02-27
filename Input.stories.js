import React from "react";
import Center from "../Decorators_Folder/Center.js";
import Input from "./Input.js";

export default {
    title : "Input_Story",
    component: Input,
    // decorators: [story => <Center>{story()}</Center>]
}

export const Small = () => <Input size='small' placeholder='Small Size Input' /> ;
export const Medium = () => <Input size='medium' placeholder='Medium Size Input' /> ;
export const Large = () => <Input size='large' placeholder='Large Size Input' /> ;

// Way to change the story name below:

Small.storyName = "Small Size Story";
Medium.storyName = "Medium Size Story";

// One more thing is to sorting the stories whose code is in the docs of stories.