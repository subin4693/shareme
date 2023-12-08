import { AiOutlineHome, AiFillHome } from "react-icons/ai";
import { IoTelescopeOutline, IoTelescopeSharp } from "react-icons/io5";
import { IoChatboxEllipsesOutline, IoChatboxEllipses } from "react-icons/io5";
import { VscBell } from "react-icons/vsc";
import { BiSolidBellRing } from "react-icons/bi";

const sidebar = [
    {
        title: "Home",
        path: "/",
        icon: <AiOutlineHome size={25} />,
        activeIcon: <AiFillHome size={25} />,
    },
    {
        title: "Chats",
        path: "/chat",
        icon: <IoChatboxEllipsesOutline size={25} />,
        activeIcon: <IoChatboxEllipses size={25} />,
    },
    {
        title: "Explore",
        path: "/explore",

        icon: <IoTelescopeOutline size={25} />,
        activeIcon: <IoTelescopeSharp size={25} />,
    },
    {
        title: "Activity",
        path: "/activity",

        icon: <VscBell size={25} />,
        activeIcon: <BiSolidBellRing size={25} />,
    },
];

export { sidebar };
