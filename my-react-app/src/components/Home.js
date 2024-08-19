import { useContext, useEffect } from "react";
import { Card } from "./Card"
import { Navbar } from "./Navbar"
import { WidgetsDiv } from "./Widgets"
import { MyContext } from "./Context";
import { Addscreen } from "./addscreen";

export const Home = ()=>{
    const { state, dispatch } = useContext(MyContext);
    useEffect(()=>{
        console.log("jjj");
        
    },[state])
    return(
        <>
        <Navbar/>
        <WidgetsDiv/>
        {state.addscreen && <Addscreen categories={state.categories} he={state} />}
        </>
    )
}