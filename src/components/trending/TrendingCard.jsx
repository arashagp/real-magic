import axios from "axios";
import { useEffect, useState } from "react";

export default function TrendingCard({ movie }) {
    const [genre, setGenre] = useState([]);

    async function getGenre() {
        try {
            const { data } = await axios.get(
                "https://api.themoviedb.org/3/genre/movie/list?api_key=c8a076e45d95fbffd3277b218d34f911",
            );
            setGenre(
                movie.genre_ids
                    .map((id) => data.genres.find((genre) => genre.id === id))
                    .splice(0, 2),
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
            <div className="text-xl flex flex-col w-[30%] items-center gap-2">
                <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt="The Flash"
                    width={"100%"}
                    className="rounded"
                />
                <div className="flex gap-2 items-center justify-between w-full">
                    <h3>{movie.title}</h3>
                    <div className="flex gap-2 text-xl">
                        {genre.map((genre) => (
                            <span
                                key={genre.id}
                                className="bg-[#FF0000] text-white py-2 px-5 rounded-lg"
                            >
                                {genre.name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
