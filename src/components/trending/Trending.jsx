import { useEffect, useState } from "react";
import TrendingCard from "./TrendingCard";
import axios from "axios";
export default function Trending() {
    const [trending, setTrending] = useState([]);

    async function getRecommendationsMovies() {
        try {
            const { data } = await axios.get(
                "https://api.themoviedb.org/3/movie/popular?api_key=c8a076e45d95fbffd3277b218d34f911",
            );
            setTrending(data.results.splice(0, 3));
        } catch (error) {
            console.log(error.message);
        }
    }
    useEffect(() => {
        getRecommendationsMovies();
    }, []);

    return (
        <div className="flex flex-col gap-10">
            <h3>Trending</h3>
            <div className="flex  gap-52">
                {trending.map((movie) => (
                    <TrendingCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
}
