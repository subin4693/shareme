"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { GiParachute } from "react-icons/gi";
import { RxExit } from "react-icons/rx";

import { sidebar } from "@/constants";

const LefttSidebar = () => {
    const pathName = usePathname();

    return (
        <nav
            className="bg-gray-100 flex
                            justify-between
                            items-center
                            
                            fixed
                            w-full bottom-0
                            z-40

                           shadow-2xl
                            sm:left-5
                            sm:right-5
                            md:hidden"
        >
            {sidebar.map((navItem) => {
                const isActive =
                    (pathName.includes(navItem.path) && navItem.length > 1) ||
                    pathName === navItem.path;

                return (
                    <Link
                        href={navItem.path}
                        className={`nav_link ${
                            isActive && "bg-purple-200  font-bold shadow-md"
                        }`}
                        key={navItem.path}
                    >
                        {isActive ? navItem.activeIcon : navItem.icon}
                    </Link>
                );
            })}

            <button className="nav_link">
                <GiParachute size={25} />
            </button>
        </nav>
    );
};

export default LefttSidebar;
