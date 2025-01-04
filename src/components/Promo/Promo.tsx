export const Promo = () => {
    return (
        <div className="promo h-[865px] bg-[url('./promo.png')] bg-no-repeat bg-cover">
            <div className="bg-color h-full w-full bg-custom-gradient">
                <div className="container">
                    <header className="flex justify-between p-10">
                        <div>
                            <img src="./logo.png" alt="housesal-logo" />
                        </div>
                        <nav>
                            <ul className="flex gap-10">
                                <li className="text-white">
                                    <a href="#">On sale</a>
                                </li>
                                <li className="text-white">
                                    <a href="#">For rent</a>
                                </li>
                                <li className="text-white">
                                    <a href="#">New Residential </a>
                                </li>
                                <li className="text-white">
                                    <a href="#">Property News</a>
                                </li>
                            </ul>
                        </nav>
                    </header>
                    <div className="mt-52">
                        <h1 className="font-nunito font-bold text-6xl text-white">
                            Quality home services, on <br /> demand
                        </h1>
                        <p className="font-nunito text-3xl mt-12 text-white">
                            Experienced, hand-picked Professionals to serve you
                            at your <br /> doorstep
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
