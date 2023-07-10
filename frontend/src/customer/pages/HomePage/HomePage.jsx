import React from "react";
import MainCarousel from "../../components/carousel/MainCarousel";
import HomeSectionCarousel from "../../components/HomeSectionCarousel/HomeSectionCarousel";
import { mens_kurta } from "../../../data/Men/men_kurta";

const HomePage = () => {
	return (
		<div>
			<MainCarousel />
			<div className="space-y-10 py-20 flex flex-col justify-center px-5">
				<HomeSectionCarousel
					data={mens_kurta}
					sectionName={"Men's Kurta"}
				/>
				<HomeSectionCarousel
					data={mens_kurta}
					sectionName={"Men's Shoes"}
				/>
				<HomeSectionCarousel
					data={mens_kurta}
					sectionName={"Men's Shirts"}
				/>
			</div>
		</div>
	);
};

export default HomePage;
