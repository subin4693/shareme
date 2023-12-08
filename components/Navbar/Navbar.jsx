import Image from "next/image";
import Link from "next/link";

import { AiOutlineBell } from "react-icons/ai";
import { FaDiceD20 } from "react-icons/fa";

import Searchbar from "./Searchbar";

const Navbar = () => {
    return (
        <nav className="nav_container z-10 bg-white">
            <span className="flex_center gap-3 ">
                <FaDiceD20 size="35" color="9333ea" />
                <span className="text-lg capitalize font-bold hidden md:block">
                    share me
                </span>
            </span>

            <Searchbar />
            <div className="flex_center gap-1 sm:gap-5">
                <Link
                    href="/mssage"
                    className="bg-white p-2 rounded-md hover:bg-gray-300"
                >
                    <AiOutlineBell size="25" />
                </Link>
                <Link
                    href="/users"
                    className="flex_center gap-2 p-2 text-sm md:text-lg "
                >
                    <div className="relative w-[2.5rem] h-[2.5rem] rounded-md overflow-hidden">
                        <Image
                            src="/profile.jpg"
                            fill
                            className="object-cover rounded-md"
                            alt=""
                        />
                    </div>
                    Subin
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
