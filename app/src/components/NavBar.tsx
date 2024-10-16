import React from "react";
import { Link } from "react-router-dom";

export const NavBar: React.FC = () => {
    return (
        // <div className="navbar bg-base-100">
        //     <div className="flex-1">
        //         <Link className="btn btn-ghost normal-case text-xl" to={"/"}>Electron app</Link>
        //     </div>

        //     <div className="flex-none">
        //         <ul className="menu menu-horizontal px-1">
        //             <li>
        //                 <Link to={"/work"}>Work</Link>
        //             </li>
        //             <li tabIndex={0} >
        //                 <a>Parent</a>
        //                 <ul className="p-2">
        //                     <li><a>Submenu 1</a></li>
        //                     <li><a>Submenu 2</a></li>
        //                 </ul>
        //             </li>
        //         </ul>
        //         <div className="dropdown dropdown-end">
        //             <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        //                 <div className="w-10 rounded-full">
        //                 <img
        //                     alt="Tailwind CSS Navbar component"
        //                     src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        //                 </div>
        //             </div>
        //             <ul
        //                 tabIndex={0}
        //                 className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        //                 <li>
        //                 <a className="justify-between">
        //                     Profile
        //                     <span className="badge">New</span>
        //                 </a>
        //                 </li>
        //                 <li><a>Settings</a></li>
        //                 <li><a>Logout</a></li>
        //             </ul>
        //         </div>
        //     </div>
        // </div>
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link to={"/"} className="btn btn-ghost normal-case text-xl">Electron App</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to={"/work"}>Work</Link></li>
                    <li>
                        <details>
                        <summary>Parent</summary>
                        <ul className="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                        </details>
                    </li>
                </ul>
            </div>
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img
                        alt="Tailwind CSS Navbar component"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <li>
                    <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                    </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
            </div>
        </div>
    )
}