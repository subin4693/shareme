"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RxExit } from "react-icons/rx";

import { GiParachute } from "react-icons/gi";

import { sidebar } from "@/constants";

const LefttSidebar = () => {
    const pathName = usePathname();

    return (
        <nav className="sticky top-[77px]">
            <div className=" bg-white rounded-md p-3  mb-5 hidden lg:block">
                <div className="bg-gray-100 rounded-md">
                    <div className="flex p-2 mb-1 ml-3">
                        <Avatar>
                            <AvatarImage
                                src="/profile.jpg"
                                className="object-cover"
                            />
                            <AvatarFallback>SM</AvatarFallback>
                        </Avatar>

                        <span className="ml-3">
                            <p className="font-bold text-lg">Subin</p>
                            <p className="text-sm">@subin_3.0</p>
                        </span>
                    </div>
                    <div className="px-5 pb-5 flex justify-between text-sm font-bold ">
                        <p className="text-center">
                            200k
                            <br />
                            <span className="font-thin">Followers</span>
                        </p>
                        <p className="text-center">
                            20k <br />
                            <span className="font-thin">Following</span>
                        </p>
                        <p className="text-center  ">
                            55 <br />
                            <span className="font-thin">Drops</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className=" bg-gray-50  rounded-md hidden flex-col   md:flex">
                {sidebar.map((navItem) => {
                    const isActive =
                        (pathName.includes(navItem.path) &&
                            navItem.length > 1) ||
                        pathName === navItem.path;

                    return (
                        <Link
                            href={navItem.path}
                            className={`nav_link ${
                                isActive && " bg-purple-200  font-bold"
                            }`}
                            key={navItem.path}
                        >
                            {isActive ? navItem.activeIcon : navItem.icon}
                            <span className="hidden lg:inline">
                                {navItem.title}
                            </span>
                        </Link>
                    );
                })}

                <button className="nav_link">
                    <GiParachute size={25} />
                    <span className="hidden lg:inline">Drop</span>
                </button>

                <button className="nav_link hover:bg-gray-300">
                    <RxExit size={25} />
                    <span className="hidden lg:inline"> exit</span>
                </button>
            </div>
        </nav>
    );
};

export default LefttSidebar;
