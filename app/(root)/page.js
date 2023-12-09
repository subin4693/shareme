"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";

import { Shot, PostComponent, PostCard } from "@/components/index";

const Home = () => {
    const [selectedPost, setSelectedPost] = useState(null);

    return (
        <>
            <div className="relative overflow-x-auto   bg-white h-[88px] shot_container rounded-md ">
                <Shot />
            </div>
            <div className="p-3 pb-16 gap-4 flex items-center flex-col bg-gray-50 mt-4 rounded-md">
                <PostComponent
                    imageUrl={"/desktop-wp.jpg"}
                    view={"desktop"}
                    setSelectedPost={setSelectedPost}
                />
                <PostComponent
                    imageUrl={"/mobile-wp.jpg"}
                    view={"mobile"}
                    setSelectedPost={setSelectedPost}
                />
                <PostComponent
                    imageUrl={"/desktop-wp.jpg"}
                    view={"desktop"}
                    setSelectedPost={setSelectedPost}
                />
            </div>
            {selectedPost && (
                <PostCard
                    selectedPost={selectedPost}
                    setSelectedPost={setSelectedPost}
                />
            )}
        </>
    );
};

export default Home;
