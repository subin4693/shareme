import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { IoHeartSharp } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";

import { CiSaveDown1 } from "react-icons/ci";
import { TfiCommentsSmiley } from "react-icons/tfi";

const PostComponent = ({ imageUrl, view, setSelectedPost }) => {
    const handleSelectPost = () => {
        setSelectedPost({ url: imageUrl, view });
    };

    const handleLike = () => {
        console.log("handle like");
    };
    const handleComment = () => {
        console.log("handle comment");
    };

    const handleSave = () => {
        console.log("handle like");
    };

    const squardHandle = () => {
        console.log("handle squard");
    };

    return (
        <div
            className="border shadow w-full p-2 rounded-md  "
            onClick={handleSelectPost}
        >
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
                <Button variant="secondary" onClick={squardHandle}>
                    Add Squard
                </Button>
            </div>
            <div
                className={`w-full relative  ${
                    view === "desktop"
                        ? "h-[200px] mt-5 sm:h-[300px] sm:mt-5"
                        : " h-[70vh] md:h-[600px] mt-5"
                }`}
            >
                <Image
                    src={imageUrl}
                    fill
                    alt="img"
                    className="object-contain"
                />
            </div>
            <div className="flex gap-5 mt-5">
                <span
                    className="flex justify-start items-center gap-2"
                    onClick={handleLike}
                >
                    <IoHeartSharp className="text-red-500" size={30} />
                    Likes
                </span>
                <span
                    className="flex justify-start items-center gap-2"
                    onClick={handleComment}
                >
                    <TfiCommentsSmiley size={30} />
                    Comment
                </span>
                <span
                    className="flex justify-start items-center gap-2"
                    onClick={handleSave}
                >
                    <CiSaveDown1 size={30} />
                    Save
                </span>
            </div>
        </div>
    );
};

export default PostComponent;
