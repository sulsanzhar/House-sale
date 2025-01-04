export const Cards = () => {
    return (
        <div className="cards mt-16">
            <div className="container">
                <div className="flex justify-center gap-5">
                    <div className="card w-[400px]">
                        <img
                            className="w-full h-96"
                            src="./1card.png"
                            alt="1-card"
                        />
                        <div className="flex justify-center items-center gap-8 shadow-cardShadow h-32">
                            <div className="flex justify-center items-center bg-backgroundColorVector p-3 rounded-full">
                                <img src="./vector_right.png" alt="vector" />
                            </div>
                            <p className="font-nunito font-bold text-sm">
                                Same great quality. New lower prices.
                            </p>
                        </div>
                    </div>
                    <div className="card w-[400px]">
                        <img
                            className="w-full h-96"
                            src="./2card.png"
                            alt="1-card"
                        />
                        <div className="flex justify-center items-center gap-8 shadow-cardShadow h-32">
                            <div className="flex justify-center items-center bg-backgroundColorVector p-3 rounded-full">
                                <img src="./vector_right.png" alt="vector" />
                            </div>
                            <p className="font-nunito font-bold text-sm">
                                Everyday Essentials, High quality affordable
                            </p>
                        </div>
                    </div>
                    <div className="card w-[400px]">
                        <img
                            className="w-full h-96"
                            src="./3card.png"
                            alt="1-card"
                        />
                        <div className="flex justify-center items-center gap-8 shadow-cardShadow h-32">
                            <div className="flex justify-center items-center bg-backgroundColorVector p-3 rounded-full">
                                <img src="./vector_right.png" alt="vector" />
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
