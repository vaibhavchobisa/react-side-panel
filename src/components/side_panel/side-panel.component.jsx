import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const SidePanel = ({ isActive1, isActive2, toggleClass1, toggleClass2 }) => {

    return (
        <>
            <div className="sidebar">
                <Link to="/home" className={isActive1 ? 'active' : null} onClick={toggleClass1} > Home </Link>
                <Link to="/interview" className={isActive2 ? 'active' : null} onClick={toggleClass2}> Interview </Link>
            </div>
            <Outlet />
        </>
    );
}

export default SidePanel;