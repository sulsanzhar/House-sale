import house1 from "../../../public/house-1.png";
import house2 from "../../../public/house-2.png";
import house3 from "../../../public/house-3.png";
import house4 from "../../../public/house-4.png";
import house6 from "../../../public/house-6.png";
import house7 from "../../../public/house-7.png";

export const Gallery = () => {
    return (
        <div className="gallery mt-32">
            <div className="container">
                <h2 className="font-nunito font-semibold sm:text-center xl:text-left text-4xl">
                    More ideas and inspiration
                </h2>
                <div className="grid xs:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-items-center gap-y-5 mt-16">
                    <img
                        className="w-[295px] max-w-none h-[405px]"
                        src={house1}
                        alt="house-1"
                    />
                    <img
                        className="w-[295px] max-w-none h-[405px]"
                        src={house2}
                        alt="house-2"
                    />
                    <img
                        className="w-[295px] max-w-none h-[405px]"
                        src={house3}
                        alt="house-3"
                    />
                    <img
                        className="w-[295px] max-w-none h-[405px]"
                        src={house4}
                        alt="house-4"
                    />
                    <img
                        className="w-[295px] max-w-none h-[405px]"
                        src={house2}
                        alt="house-5"
                    />
                    <img
                        className="w-[295px] max-w-none h-[405px]"
                        src={house6}
                        alt="house-6"
                    />
                    <img
                        className="w-[295px] max-w-none h-[405px]"
                        src={house7}
                        alt="house-7"
                    />
                    <img
                        className="w-[295px] max-w-none h-[405px]"
                        src={house2}
                        alt="house-8"
                    />
                </div>
            </div>
        </div>
    );
};
