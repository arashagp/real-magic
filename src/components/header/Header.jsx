import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import IntroHeader from "./IntroHeader";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Header() {
    const [recommendationsMovies, setRecommendationsMovies] = useState([]);

    async function getRecommendationsMovies() {
        try {
            const { data } = await axios.get(
                "https://api.themoviedb.org/3/movie/popular?api_key=c8a076e45d95fbffd3277b218d34f911",
            );
            const randomIndex = Math.floor(Math.random() * data.results.length);
            setRecommendationsMovies(data.results.splice(randomIndex, 4));
        } catch (error) {
            console.log(error.message);
        }
    }
    useEffect(() => {
        getRecommendationsMovies();
    }, []);

    return (
        <header>
            <div className="container mx-auto"></div>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop
                pagination={{
                    dynamicBullets: true,
                    clickable: true,
                    type: "bullets",
                }}
                modules={[Pagination, Autoplay]}
                autoplay={{
                    delay: 3000,
                }}
                className="w-full"
            >
                {recommendationsMovies.map((movie) => (
                    <SwiperSlide key={movie.id}>
                        <IntroHeader movie={movie} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </header>
    );
}
