import { Outlet, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Layout = () => {
    const location = useLocation()
    const navLinks = [
        {to: "/", label: "Home"},
        {to: "/tools", label: "Tools"},
        {to: "/blog", label: "Blog"},
        {to: "/contact", label: "Contact"}
    ]
    return (
        <>
            <div className="line-br"></div>
            <div className="outlet">
                <Outlet/>   
            </div>

            <nav>
                <ul>
                    {navLinks.map((link) => (
                        <li key={link.to}>
                            <Link to={link.to} className={location.pathname === link.to ? 'activeLink': 'navLink'}>
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

        </>
    )
}

export default Layout;