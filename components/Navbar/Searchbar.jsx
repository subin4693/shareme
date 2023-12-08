"use client";
import { useState, useEffect } from "react";

import Link from "next/link";

import { AiOutlineSearch } from "react-icons/ai";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const Searchbar = () => {
    const [search, setSearch] = useState("");
    const [openBox, setOpenBox] = useState(false);

    return (
        <>
            <div className="flex-1 hidden sm:block sm:px-[5%]  ">
                <label
                    className="flex_center bg-gray-50 px-3 py-2 w-full rounded-md md:w-2/3 lg:w-1/2"
                    htmlFor="search"
                >
                    <AiOutlineSearch size="27" color="#4b5563" />
                    <input
                        type="text"
                        className="bg-transparent border-none outline-none mx-2  w-full"
                        id="search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </label>
            </div>

            {/* mobile searchbar */}

            <div className="flex-1 flex justify-end mx-3 sm:hidden">
                <AlertDialog>
                    <AlertDialogTrigger>
                        <label className="flex_center bg-white p-2  w-full  rounded-md hover:bg-gray-300">
                            <AiOutlineSearch size="27" />
                        </label>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>
                                <Input placeholder="search user" />
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                                <Link
                                    href="/user"
                                    className="flex gap-3 items-center p-2 rounded-md hover:bg-gray-100"
                                >
                                    <Avatar>
                                        <AvatarImage src="/profile.jpg" />
                                        <AvatarFallback>SM</AvatarFallback>
                                    </Avatar>
                                    <span>
                                        <CardTitle className="text-lg">
                                            Subin
                                        </CardTitle>
                                        <CardDescription>
                                            @subin_3.0
                                        </CardDescription>
                                    </span>
                                </Link>
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>
        </>
    );
};
export default Searchbar;
