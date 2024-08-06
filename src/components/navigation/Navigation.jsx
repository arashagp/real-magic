import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="py-8 lg:py-5 2xl:px-14">
            <ul className="hidden md:flex flex-row gap-10 justify-between items-center text-xl">
                <li>
                    <NavLink href="#">Home</NavLink>
                </li>
                <li>
                    <NavLink href="#">Genre</NavLink>
                </li>
                <li>
                    <NavLink href="#">Country</NavLink>
                </li>
                <li>
                    <div className="relative hidden xl:block">
                        <input
                            type="text"
                            className="rounded-3xl placeholder:text-[rgb(98, 98, 98)] px-5 py-2 text-black text-2xl border-none outline-none"
                            placeholder="Search Movies ..."
                        />
                        <CiSearch className="absolute top-[8px] right-[16px] text-4xl text-black" />
                    </div>
                </li>
                {/* <li className="hidden">
                    <div className="relative">
                        <input
                            type="text"
                            className="rounded-3xl placeholder:text-[rgb(98, 98, 98)] px-5 py-2 text-black text-2xl border-none outline-none"
                            placeholder="Search Movies ..."
                        />
                        <CiSearch className="absolute top-[8px] right-[16px] text-4xl text-black" />
                    </div>
                </li> */}
                <li>
                    <NavLink href="#">Movies</NavLink>
                </li>
                <li>
                    <NavLink href="#">Series</NavLink>
                </li>
                <li>
                    <NavLink href="#">Animation</NavLink>
                </li>
                <li>
                    <NavLink href="#">Login/Singup</NavLink>
                </li>
            </ul>

            <div className="md:hidden w-full ">
                <h1 className="text-4xl inline-block text-[#E4003A]">
                    Real Magic
                </h1>
                <CiMenuFries
                    className="ml-[400px] text-4xl cursor-pointer inline-block "
                    onClick={() => setIsOpen(!isOpen)}
                />
                <ul
                    className={` flex flex-col justify-center items-center overflow-hidden  bg-gray-900 rounded-3xl text-white mt-2 gap-5  transition-all duration-500`}
                    // style={{ height: isOpen ? "100%" : "0" }}
                    style={
                        isOpen
                            ? {
                                  height: "200px",
                                  padding: "10rem 0",
                              }
                            : {
                                  height: "0px",
                              }
                    }
                >
                    <li>
                        <NavLink href="#">Home</NavLink>
                    </li>
                    <li>
                        <NavLink href="#">Genre</NavLink>
                    </li>
                    <li>
                        <NavLink href="#">Movies</NavLink>
                    </li>
                    <li>
                        <NavLink href="#">Country</NavLink>
                    </li>
                    <li>
                        <NavLink href="#">Series</NavLink>
                    </li>
                    <li>
                        <NavLink href="#">Animation</NavLink>
                    </li>
                    <li>
                        <NavLink href="#">Login/Singup</NavLink>
                    </li>
                </ul>
            </div>
            <div className="relative mt-10 w-full xl:hidden">
                <input
                    type="text"
                    className="rounded-3xl placeholder:text-[rgb(98, 98, 98)] px-5 py-2 text-black text-2xl border-none outline-none w-full"
                    placeholder="Search Movies ..."
                />
                <CiSearch className="absolute top-[8px] right-[16px] text-4xl text-black" />
            </div>
        </nav>
    );
}
