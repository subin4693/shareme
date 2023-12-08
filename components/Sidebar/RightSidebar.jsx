import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import Link from "next/link";

const RightSidebar = () => {
    return (
        <section className="sticky top-[77px]">
            <div className="p-3 bg-gray-50 rounded-md">
                <h1 className="text-lg font-bold mb-2">Popular </h1>
                <Link
                    href="/user"
                    className="flex  items-center p-2 rounded-md hover:bg-red-100"
                >
                    <Avatar>
                        <AvatarImage
                            src="/profile.jpg"
                            className="object-cover"
                        />
                        <AvatarFallback>SM</AvatarFallback>
                    </Avatar>
                    <span className="ml-3">
                        <h1 className="text-md">Subin</h1>
                        <h2 className="text-sm">@subin_3.0</h2>
                    </span>
                </Link>
                <Link
                    href="/user"
                    className="flex  items-center p-2 rounded-md hover:bg-red-100"
                >
                    <Avatar>
                        <AvatarImage
                            src="/profile.jpg"
                            className="object-cover"
                        />
                        <AvatarFallback>SM</AvatarFallback>
                    </Avatar>
                    <span className="ml-3">
                        <h1 className="text-md">Subin</h1>
                        <h2 className="text-sm">@subin_3.0</h2>
                    </span>
                </Link>
                <Link
                    href="/user"
                    className="flex  items-center p-2 rounded-md hover:bg-red-100"
                >
                    <Avatar>
                        <AvatarImage
                            src="/profile.jpg"
                            className="object-cover"
                        />
                        <AvatarFallback>SM</AvatarFallback>
                    </Avatar>
                    <span className="ml-3">
                        <h1 className="text-md">Subin</h1>
                        <h2 className="text-sm">@subin_3.0</h2>
                    </span>
                </Link>
                <Link
                    href="/user"
                    className="flex  items-center p-2 rounded-md hover:bg-red-100"
                >
                    <Avatar>
                        <AvatarImage
                            src="/profile.jpg"
                            className="object-cover"
                        />
                        <AvatarFallback>SM</AvatarFallback>
                    </Avatar>
                    <span className="ml-3">
                        <h1 className="text-md">Subin</h1>
                        <h2 className="text-sm">@subin_3.0</h2>
                    </span>
                </Link>
                <Link
                    href="/user"
                    className="flex  items-center p-2 rounded-md hover:bg-red-100"
                >
                    <Avatar>
                        <AvatarImage
                            src="/profile.jpg"
                            className="object-cover"
                        />
                        <AvatarFallback>SM</AvatarFallback>
                    </Avatar>
                    <span className="ml-3">
                        <h1 className="text-md">Subin</h1>
                        <h2 className="text-sm">@subin_3.0</h2>
                    </span>
                </Link>
            </div>
        </section>
    );
};

export default RightSidebar;
