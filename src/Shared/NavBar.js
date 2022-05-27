import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { GiScooter } from "react-icons/gi";
import { BiSearchAlt2 } from "react-icons/bi";
import { MdOutlineShoppingCart, MdAddIcCall } from "react-icons/md";
import { RiMenuLine } from "react-icons/ri";
import { BsFillPersonFill, BsFillSuitHeartFill } from "react-icons/bs";
const NavBar = () => {
    const menus = [
        {
            item: "Home",
            path: "/",
        },
        {
            item: "menu",
            path: "/menu",
        },
        {
            item: "About",
            path: "/about",
        },
        {
            item: "Shop",
            path: "/shop",
        },
        {
            item: "Contact",
            path: "/contact",
        },
    ];
    const [scrollPosition, setScrollPosition] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrollPosition(true)
            } else {
                setScrollPosition(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])
    return (
        <>
            <nav className={`bg-white shadow-lg font-JosefinSans sticky ${!scrollPosition ? "py-7" : "py-2"} top-0 transition-all duration-100 z-50`}>
                <div className="container flex justify-between">
                    <div className="lg:hidden text-2xl text-left flex items-center justify-center !ml-[15px]">
                        <RiMenuLine />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="mr-6">
                            <Link to="/">
                                <img src={require("../assets/images/logo.png")} alt="logo" />
                            </Link>
                        </div>
                        <div className="hidden lg:flex items-center justify-center">
                            {menus.map((menu, index) => (
                                <NavLink
                                    key={index}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "mx-4 text-lg text-primary font-semibold"
                                            : "mx-4 text-lg hover:text-primary font-semibold"
                                    }
                                    to={menu.path}
                                >
                                    {menu.item}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                    <div className="lg:hidden text-2xl text-left flex items-center justify-center !mr-[15px]">
                        <MdAddIcCall />
                    </div>
                    <div className="hidden lg:flex items-center justify-center">
                        <span className="!text-secondary mr-4">
                            <GiScooter className="text-6xl" />
                        </span>
                        <div>
                            <p className="text-gray-400 text-sm text-left">
                                Call and order in
                            </p>
                            <h3 className="text-3xl font-bold text-primary">
                                +1 718-904-4450
                            </h3>
                        </div>
                    </div>
                    <div className="hidden lg:flex items-center justify-between">
                        <span className="p-3 cursor-pointer mx-1 hover:bg-primary hover:border-primary hover:text-white text-xl border-2 border-border rounded-[50%]">
                            <BiSearchAlt2 />
                        </span>
                        <span className="p-3 cursor-pointer mx-1 hover:bg-primary hover:border-primary hover:text-white text-xl border-2 border-border rounded-[50%]">
                            <BsFillPersonFill />
                        </span>
                        <span className="p-3 cursor-pointer mx-1 hover:bg-primary hover:border-primary hover:text-white text-xl border-2 border-border rounded-[50%] relative group">
                            <BsFillSuitHeartFill />
                            <span class="flex items-center justify-center w-6 h-6 text-sm font-semibold text-white bg-primary rounded-[50%] absolute top-0 right-0 group-hover:bg-primary_hover">
                                1
                            </span>
                        </span>
                        <span className="p-3 cursor-pointer mx-1 hover:bg-primary hover:border-primary hover:text-white text-xl border-2 border-border rounded-[50%] relative group">
                            <MdOutlineShoppingCart />
                            <span class="flex items-center justify-center w-6 h-6 text-sm font-semibold text-white bg-primary rounded-[50%] absolute top-0 right-0 group-hover:bg-primary_hover">
                                1
                            </span>
                        </span>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavBar;