import React from "react";
import MainCarousel from "../../components/carousel/MainCarousel";
import HomeSectionCarousel from "../../components/HomeSectionCarousel/HomeSectionCarousel";

const HomePage = () => {
    return (
        <div>
            <MainCarousel />
            <div className="space-y-10 py-20 flex flex-col justify-center px-5">
                <HomeSectionCarousel />
                <HomeSectionCarousel />
                <HomeSectionCarousel />
            </div>
        </div>
    );
};

export default HomePage;
