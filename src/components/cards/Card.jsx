import { IoMdTime } from "react-icons/io";

export default function Card({ movie }) {
    return (
        <div className="text-xl flex flex-col w-[20%] items-center gap-2">
            <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                width={"100%"}
                alt="The Flash"
                className="rounded object-fill"
            />
            <div className="text-lg flex gap-2 items-center w-full justify-between">
                <h5>{movie.name || movie.title}</h5>
                <div className="flex gap-2 items-center">
                    <span className="bg-[#FF0000] text-white py-1 px-1 rounded-lg">
                        HD
                    </span>
                    <span className="flex gap-2 items-center">
                        <IoMdTime />
                        3:12:20
                    </span>
                </div>
            </div>
        </div>
    );
}
