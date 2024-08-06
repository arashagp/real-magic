import { GrLinkNext } from "react-icons/gr";

import RecentlyCard from "./RecentlyCard";
import { useEffect, useState } from "react";
import axios from "axios";

export default function RecentlyUpdated() {
    const [top_ratedTv, setTopRatedTv] = useState([]);

    async function getTopRatedTv() {
        try {
            const { data } = await axios.get(
                "https://api.themoviedb.org/3/tv/top_rated?api_key=c8a076e45d95fbffd3277b218d34f911",
            );
            setTopRatedTv(data.results.splice(0, 4));
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        getTopRatedTv();
    }, []);

    return (
        <div className="flex flex-col gap-10">
            <h3>Recently Updated</h3>
            <div className="flex gap-52 items-center">
                <div className="flex gap-52">
                    {top_ratedTv.map((movie) => (
                        <RecentlyCard key={movie.id} movie={movie} />
                    ))}
                </div>
                <div className="bg-white rounded-full p-5">
                    <GrLinkNext className="text-black" />
                </div>
            </div>
        </div>
    );
}
