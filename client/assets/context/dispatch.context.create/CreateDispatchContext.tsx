import React from "react";
import DispatchAction from "../../../interface/DispatchAction";

export const DispatchContext = React.createContext<{ dispatch: DispatchAction } | undefined>(undefined);