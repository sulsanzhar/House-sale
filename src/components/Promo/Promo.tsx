import logo from "../../../public/logo.png";

export const Promo = () => {
    return (
        <div className="promo h-[865px] bg-promo bg-no-repeat bg-cover bg-center">
            <div className="bg-color h-full w-full bg-custom-gradient">
                <div className="container">
                    <header className="flex justify-between p-10 h-28">
                        <div>
                            <img src={logo} alt="housesal-logo" />
                        </div>
                        <nav>
                            <ul className="hidden lg:flex gap-10">
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
                        <button className="inline-block lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="white"
                                className="size-10"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                        </button>
                    </header>
                    <div className="mt-52">
                        <h1 className="font-nunito font-bold text-[6.25vw] lg:text-6xl text-white">
                            Quality home services, on <br /> demand
                        </h1>
                        <p className="font-nunito text-wrap text-[3.25vw] lg:text-3xl mt-12 text-white">
                            Experienced, hand-picked Professionals to serve you
                            at your <br /> doorstep
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
