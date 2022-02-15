import React from "react";
import { DispatchContext } from "../dispatch.context.create/CreateDispatchContext";

export const UseDispatchContext = () => {

    const dispatch = React.useContext(DispatchContext);
    if (dispatch) {
        return dispatch;
    }
    throw new Error("Unable to access dispatch context");

}