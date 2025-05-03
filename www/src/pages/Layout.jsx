import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    const navLinks = {
        {to: "/", label: "Home"}
        // TODO: create a map for the links.
    }
    return (
        <>
            <div className="outlet">
                <Outlet/>   
            </div>

            <nav>
                <ul>
                    <li>
                        <Link className="navLink" to="/">home</Link>
                    </li>
                    <li>
                        <Link className="navLink" to="/tools">tools</Link>
                    </li>
                    <li>
                        <Link className="navLink" to="/blog">blog</Link>
                    </li>
                    <li>
                        <Link className="navLink" to="/contact">contact</Link>
                    </li>
                </ul>
            </nav>

        </>
    )
}

export default Layout;