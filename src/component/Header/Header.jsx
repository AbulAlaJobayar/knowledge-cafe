import React from 'react';
import "./Header"

const Header = () => {
    return (
        <>
            <div className="navbar bg-gray-200 px-16 sticky top-0 ">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-3xl font-bold">Codeamy</a>
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
                                <img src="https://images.unsplash.com/photo-1562159278-1253a58da141?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;