import { createContext } from "react";
import { ScrollContextInterface } from "../types";


const intialScrollContext = {
    atTop: false,
    atBottom: false,
}
export const ScrollContext = createContext<ScrollContextInterface>(intialScrollContext)