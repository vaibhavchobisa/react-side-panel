import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const SidePanel = () => {
    return (
        <>
            <div class="sidebar">
                <Link to="/">Home</Link>
                <Link to="/interview">Interview</Link>
            </div>
            <Outlet />
        </>
    );
}

export default SidePanel;