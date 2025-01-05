import card1 from "../../../public/1card.png";
import card2 from "../../../public/2card.png";
import card3 from "../../../public/3card.png";
import vector from "../../../public/vector_right.png";

export const Cards = () => {
    return (
        <div className="cards mt-16">
            <div className="container">
                <div className="flex justify-center gap-5 flex-wrap">
                    <div className="card w-[400px]">
                        <img className="w-full h-96" src={card1} alt="1-card" />
                        <div className="flex justify-center items-center gap-8 shadow-cardShadow h-32">
                            <div className="flex justify-center items-center bg-backgroundColorVector p-3 rounded-full">
                                <img src={vector} alt="vector" />
                            </div>
                            <p className="font-nunito font-bold text-sm">
                                Same great quality. New lower prices.
                            </p>
                        </div>
                    </div>
                    <div className="card w-[400px]">
                        <img className="w-full h-96" src={card2} alt="1-card" />
                        <div className="flex justify-center items-center gap-8 shadow-cardShadow h-32">
                            <div className="flex justify-center items-center bg-backgroundColorVector p-3 rounded-full">
                                <img src={vector} alt="vector" />
                            </div>
                            <p className="font-nunito font-bold text-sm">
                                Everyday Essentials, High quality affordable
                            </p>
                        </div>
                    </div>
                    <div className="card w-[400px]">
                        <img className="w-full h-96" src={card3} alt="1-card" />
                        <div className="flex justify-center items-center gap-8 shadow-cardShadow h-32">
                            <div className="flex justify-center items-center bg-backgroundColorVector p-3 rounded-full">
                                <img src={vector} alt="vector" />
                            </div>
                            <p className="font-nunito font-bold text-sm">
                                Join the makeover journey
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
