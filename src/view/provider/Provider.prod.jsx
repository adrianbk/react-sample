import React from "react";
import AltContainer from "alt-container";
import alt from "../libs/alt/Alt";
import setup from "./setup";

setup(alt);

export default ({children}) =>
    <AltContainer flux={alt}>
        {children}
    </AltContainer>
