import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import IntroHeader from "./IntroHeader";

export default function Header() {
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
                    delay: 1000,
                }}
                className="w-full"
            >
                <SwiperSlide>
                    <IntroHeader />
                </SwiperSlide>
            </Swiper>
        </header>
    );
}
