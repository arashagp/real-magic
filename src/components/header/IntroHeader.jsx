import { MdAccessTime } from "react-icons/md";
import { IoIosPlayCircle } from "react-icons/io";

export default function IntroHeader() {
    return (
        <>
            <img
                src="/headerBackground.png"
                alt=""
                width={"100%"}
                className="relative z-0"
            />
            <div className="absolute container bottom-0 mx-auto w-full h-[50%] flex flex-col justify-between items-start">
                <div className="flex flex-row gap-10">
                    <button className="text-white bg-[#FF0000] px-5 py-2 flex items-center justify-center gap-2 rounded text-3xl">
                        Watch Now
                        <IoIosPlayCircle className="text-4xl" />
                    </button>
                    <button className="text-white border-[#FF0000] border-[1px] flex items-center justify-center gap-2 px-5 py-2 rounded text-3xl">
                        Watch Later
                        <MdAccessTime className="text-4xl" />
                    </button>
                </div>
                <div className="hidden md:block">
                    <h1 className="text-4xl font-bold">
                        Avatar: The Way of Water
                    </h1>
                    <div className="flex flex-row gap-10 items-center">
                        <div className="flex flex-row gap-5">
                            <button>Action</button>
                            <button>Adventure</button>
                            <button>Science Fiction</button>
                        </div>
                        <div>2022 </div>
                        <div>3:12:00</div>
                        <div>8.5</div>
                    </div>
                    <p className="text-xl w-[50%]">
                        Set more than a decade after the events of the first
                        film, learn the story of the Sully family (Jake,
                        Neytiri, and their kids), the trouble that follows them,
                        the lengths they go to keep each other safe, the battles
                        they fight to stay alive, and the tragedies they endure.
                    </p>
                </div>
            </div>
        </>
    );
}
