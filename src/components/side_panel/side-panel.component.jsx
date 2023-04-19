import { Link, Outlet } from "react-router-dom";

const SidePanel = ({ path }) => {

    return (
        <>
            <div className="sidebar">
                <Link to="/home" className={path === '/home' ? 'active' : null} > Home </Link>
                <Link to="/interview" className={path === '/interview' ? 'active' : null}  > Interview </Link>
            </div>
            <Outlet />
        </>
    );
}

export default SidePanel;