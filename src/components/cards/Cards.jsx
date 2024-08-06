import { GrLinkNext } from "react-icons/gr";
import Card from "./Card";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Cards({ titleName }) {
    const [trending, setTrending] = useState([]);
    const [recommendation, setRecommendation] = useState("movie");

    async function getRecommendationsMovies() {
        if (titleName !== "Recommendations") {
            try {
                const { data } = await axios.get(
                    `https://api.themoviedb.org/3/${
                        titleName === "New Releases - Movies"
                            ? "movie/now_playing"
                            : "tv/airing_today"
                    }?api_key=c8a076e45d95fbffd3277b218d34f911`,
                );
                setTrending(data.results.splice(0, 4));
            } catch (error) {
                console.log(error.message);
            }
        } else {
            try {
                const { data } = await axios.get(
                    `https://api.themoviedb.org/3/${recommendation}/popular?api_key=c8a076e45d95fbffd3277b218d34f911`,
                );
                setTrending(data.results.splice(0, 8));
            } catch (error) {
                console.log(error.message);
            }
        }
    }
    useEffect(() => {
        getRecommendationsMovies();
    }, [recommendation]);

    return (
        <div className="flex flex-col gap-10">
            <div className="flex justify-between items-center">
                {titleName === "Recommendations" ? (
                    <div className="flex gap-12 items-center text-2xl">
                        <h3>{titleName} </h3>
                        <NavLink
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? "bg-[#FF0000] text-white py-1 px-1 rounded-lg"
                                    : isActive
                                    ? "border-[#FF0000] border-[1px] text-gray-600 py-1 px-1 rounded-lg"
                                    : ""
                            }
                            onClick={() => setRecommendation("movie")}
                        >
                            <span className="py-1 px-1 rounded-lg">Movies</span>
                        </NavLink>
                        <NavLink
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? "bg-[#FF0000] text-white py-1 px-1 rounded-lg"
                                    : isActive
                                    ? "border-[#FF0000] border-[1px] text-gray-600 py-1 px-1 rounded-lg"
                                    : ""
                            }
                            onClick={() => setRecommendation("tv")}
                        >
                            <span className="py-1 px-1 rounded-lg">Series</span>
                        </NavLink>
                    </div>
                ) : (
                    <>
                        <h3>{titleName} </h3>
                    </>
                )}

                <span className="text-gray-700 flex items-center gap-4 cursor-pointer">
                    View All
                    <GrLinkNext />
                </span>
            </div>
            <div className="flex  gap-24 flex-wrap">
                {titleName === "Recommendations" ? (
                    <>
                        {trending.map((movie) => (
                            <Card key={movie.id} movie={movie} />
                        ))}
                    </>
                ) : (
                    <>
                        {trending.map((movie) => (
                            <Card key={movie.id} movie={movie} />
                        ))}
                    </>
                )}
            </div>
        </div>
    );
}
