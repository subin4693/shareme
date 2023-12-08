"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { IoHeartSharp } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";

import { CiSaveDown1 } from "react-icons/ci";
import { TfiCommentsSmiley } from "react-icons/tfi";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const PostCard = ({ selectedPost, setSelectedPost }) => {
    const [selectedTab, setSelectedTab] = useState("");

    useEffect(() => {
        console.log(selectedTab);
    }, [selectedTab]);

    const handleSave = () => {
        console.log("handle save");
    };

    const handleClose = () => {
        setSelectedPost(null);
    };

    const comments = [
        {
            commentTxt: "comment1",
            user: {
                name: "subin",
                profile: "./profile.jpg",
            },

            comments: [
                {
                    commentTxt: "awsome",
                    user: {
                        name: "subin",
                        profile: "./profile.jpg",
                    },
                },
            ],
        },
        {
            commentTxt: "awsome",
            user: {
                name: "subin",
                profile: "./profile.jpg",
            },
        },
        {
            commentTxt: "awsome",
            user: {
                name: "subin",
                profile: "./profile.jpg",
            },
        },
        {
            commentTxt: "awsome",
            user: {
                name: "subin",
                profile: "./profile.jpg",
            },
        },
    ];

    return (
        <div
            className="fixed z-[9999] backdrop-blur  backdrop-sepia-0 backdrop-brightness-50  top-0 bottom-0 left-0 right-0 flex justify-center items-center"
            onClick={handleClose}
        >
            <div
                onClick={(e) => {
                    e.stopPropagation();
                }}
                className=" bg-gray-200"
            >
                <div
                    className={`${
                        selectedPost.view === "desktop" ? "h-fit w-screen" : ""
                    } relative`}
                >
                    <img
                        src={selectedPost.url}
                        alt="post img"
                        className="object-contain w-full h-full"
                    />
                </div>
                <div>
                    <div className="flex gap-5 items-center p-2 relative">
                        <button
                            onClick={() => setSelectedTab("likes")}
                            className="flex justify-center items-center text-sm  "
                        >
                            <IoHeartSharp className="text-3xl" /> Likes
                        </button>
                        <button
                            onClick={() => setSelectedTab("comments")}
                            className="flex justify-center items-center text-sm"
                        >
                            <TfiCommentsSmiley className="text-3xl" /> Comments
                        </button>
                        <button
                            onClick={handleSave}
                            className="flex justify-center items-center text-sm"
                        >
                            <CiSaveDown1 className="text-3xl" /> Save
                        </button>
                        <span
                            className={`absolute  h-[3px] bg-red-500 bottom-0 duration-100 ${
                                selectedTab === "likes"
                                    ? "left-2 w-[71px]"
                                    : "left-[87px] w-[105px]"
                            }`}
                        ></span>
                    </div>
                    <div className="max-h-[300px] overflow-y-auto">
                        {selectedTab === "likes" ? (
                            <div className="flex items-center gap-5 justify-between p-2">
                                <div className="flex items-center gap-5 justify-between ">
                                    <Avatar>
                                        <AvatarImage
                                            src="/profile.jpg"
                                            className="object-cover"
                                        />
                                        <AvatarFallback>SM</AvatarFallback>
                                    </Avatar>
                                    subin_3.0
                                </div>
                                <Button>Squard</Button>
                            </div>
                        ) : (
                            <div>
                                {comments.map((comment) => (
                                    <div>{comment.commentTxt}</div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostCard;
