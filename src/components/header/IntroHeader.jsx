import { MdAccessTime } from "react-icons/md";
import { IoIosPlayCircle } from "react-icons/io";
import { useEffect, useState } from "react";
import axios from "axios";

export default function IntroHeader({ movie }) {
    const [genre, setGenre] = useState([]);

    async function getGenre() {
        try {
            const { data } = await axios.get(
                "https://api.themoviedb.org/3/genre/movie/list?api_key=c8a076e45d95fbffd3277b218d34f911",
            );
            setGenre(
                movie.genre_ids.map((id) =>
                    data.genres.find((genre) => genre.id === id),
                ),
            );
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getGenre();
    }, []);

    return (
        <>
            <img
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                alt=""
                width={"100%"}
                className="relative z-0"
            />
            <div className="absolute container bottom-0 pl-5 gap-10 lg:pl-32 pb-12 lg:gap-40 xl:pl-64 xl:pb-20 mx-auto w-full xl:gap-60 flex flex-col justify-between items-start">
                <div className="flex flex-row gap-10 self-center">
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
                        {movie.original_title}
                    </h1>
                    <div className="flex flex-row gap-10 items-center">
                        <div className="flex flex-row gap-5">
                            {genre.map((genre) => (
                                <button key={genre.id}>{genre.name}</button>
                            ))}
                        </div>
                        <div>{movie.release_date.substring(0, 4)}</div>
                        <div>3:12:00</div>
                        <div>{movie.vote_average}</div>
                    </div>
                    <p className="lg:text-xl w-[50%]">{movie.overview}</p>
                </div>
            </div>
        </>
    );
}
