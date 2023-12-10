import Link from "next/link";

import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { BiSend } from "react-icons/bi";
import { FaVideo } from "react-icons/fa";
const Chat = () => {
    return (
        <session>
            <div className="flex justify-between items-center">
                <Link href="/user" className="flex  items-center  rounded-md">
                    <Avatar>
                        <AvatarImage
                            src="/profile.jpg"
                            className="object-cover"
                        />
                        <AvatarFallback>SM</AvatarFallback>
                    </Avatar>
                    <span className="ml-3">
                        <h1 className="text-sm font-bold md:text-md">Subin</h1>
                        <h2 className="text-sm">@subin_3.0</h2>
                    </span>
                </Link>

                <div>
                    <FaVideo size={33} />
                </div>
            </div>
            <div className="h-full relative">
                <div className="flex absolute bottom-0 left-0 right-0">
                    <Input className="flex-1" />
                    <BiSend />
                </div>
            </div>
        </session>
    );
};

export default Chat;
