import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

    return (
        <div className="">
            <div className="navbar bg-base-100">
                <div className="mx-auto">
                    <ul className="menu-horizontal gap-1 md:gap-5 px-1 text-lg font-semibold">
                        <li><NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                                }
                                >
                                Home
                            </NavLink>
                        </li>
                    
                        <li><NavLink
                                to="/education"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                                }
                                >
                                Education
                            </NavLink>
                        </li>

                        <li><NavLink
                                to="/projects"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                                }
                                >
                                Projects
                            </NavLink>
                        </li>

                        <li><NavLink
                                to="/contact"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                                }
                                >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;