import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import "./AppLayout.css"

export default function AppLayout(){
    return(
        <div className="layout">
            <Navbar/>
            <main className="layout__content">
                <Outlet/>
            </main>
        </div>
    );
}