import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import PortfolioContent from "./PortfolioContent";
import { v4 } from "uuid";

export default function PortfolioSlider({ props }) {
    const { portfolio, icons } = props;
    const { portfolio_title, portfolio_content } = portfolio;

    return (
        <>
            <Swiper
                cssMode={true}
                navigation={true}
                loop={true}
                grabCursor={true}
                pagination={{
                    clickable: true,
                }}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                {portfolio_content.map((content) => (
                    <SwiperSlide key={v4()}>
                        <PortfolioContent
                            props={{ content, portfolio_title, icons }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
