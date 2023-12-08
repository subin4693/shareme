import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";
const Shot = () => {
    return (
        <div className="flex items-center gap-3 w-fit   absolute top-3 left-3 right-3  ">
            <button className="border-purple-600 border-[4px] p-[1px] md:p-[2px] rounded-xl ">
                <AiOutlinePlus size="45" />
            </button>
            <div className="border-red-400 border-[4px] p-[2px] rounded-xl ">
                <div className="w-[45px] h-[45px] md:h-[50px] md:w-[50px] relative">
                    <Image
                        src="/profile.jpg"
                        alt="profile"
                        fill
                        className="rounded-lg object-cover"
                    />
                </div>
            </div>
            <div className="border-red-400 border-[4px] p-[2px] rounded-xl ">
                <div className="w-[45px] h-[45px] md:h-[50px] md:w-[50px] relative">
                    <Image
                        src="/profile.jpg"
                        alt="profile"
                        fill
                        className="rounded-lg object-cover"
                    />
                </div>
            </div>
            <div className="border-red-400 border-[4px] p-[2px] rounded-xl ">
                <div className="w-[45px] h-[45px] md:h-[50px] md:w-[50px] relative">
                    <Image
                        src="/profile.jpg"
                        alt="profile"
                        fill
                        className="rounded-lg object-cover"
                    />
                </div>
            </div>
            <div className="border-red-400 border-[4px] p-[2px] rounded-xl ">
                <div className="w-[45px] h-[45px] md:h-[50px] md:w-[50px] relative">
                    <Image
                        src="/profile.jpg"
                        alt="profile"
                        fill
                        className="rounded-lg object-cover"
                    />
                </div>
            </div>

            <div className="border-gray-400 border-[4px] p-[2px] rounded-xl ">
                <div className="w-[45px] h-[45px] md:h-[50px] md:w-[50px] relative">
                    <Image
                        src="/profile.jpg"
                        alt="profile"
                        fill
                        className="rounded-lg object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default Shot;
