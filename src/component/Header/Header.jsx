import React from 'react';
import "./Header"

const Header = () => {
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">Codeamy</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li tabIndex ={0}>
                            <a>
                                Blog
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul className="p-2 bg-base-100">
                                <li><a>React</a></li>
                                <li><a>Vite</a></li>
                            </ul>
                        </li>
                        <li><a>About</a></li>
                    </ul>
                </div>
                <div className="flex-none gap-2">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="../../../public/icon-images.jpg" />
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;