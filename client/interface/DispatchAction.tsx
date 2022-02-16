import State from "./State";

export default interface DispatchAction {

    type: string;
    payload: State;

};