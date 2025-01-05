import logo from "../../../public/logo.png";
import googleLogo from "../../../public/googlePlay-logo.png";
import appleLogo from "../../../public/appStore-logo.png";

export const Footer = () => {
    return (
        <footer className="bg-[#093A7A] h-[758px] mt-32">
            <div className="container">
                <ul className="flex pt-11">
                    <li>
                        <a
                            className="font-roboto text-[#CACACA] mr-11"
                            href="#"
                        >
                            Delivery Service
                        </a>
                    </li>
                    <li>
                        <a
                            className="font-roboto text-[#CACACA] mr-16"
                            href="#"
                        >
                            Assembly Service
                        </a>
                    </li>
                    <li>
                        <a
                            className="font-roboto text-[#CACACA] mr-20"
                            href="#"
                        >
                            Customer Service
                        </a>
                    </li>
                    <li>
                        <a
                            className="font-roboto text-[#CACACA] mr-20"
                            href="#"
                        >
                            Contact Us
                        </a>
                    </li>
                    <li>
                        <a
                            className="font-roboto text-[#CACACA] mr-[72px]"
                            href="#"
                        >
                            Near Me
                        </a>
                    </li>
                    <li>
                        <a
                            className="font-roboto text-[#CACACA] mr-20"
                            href="#"
                        >
                            Careers
                        </a>
                    </li>
                    <li>
                        <a
                            className="font-roboto text-[#CACACA] mr-20"
                            href="#"
                        >
                            Gift Cards
                        </a>
                    </li>
                    <li>
                        <a className="font-roboto text-[#CACACA]" href="#">
                            Contact Us
                        </a>
                    </li>
                </ul>
                <hr className="mt-8 mb-8 opacity-[16%]" />
                <div>
                    <h4 className="font-nunito font-semibold text-white text-2xl">
                        Serving in
                    </h4>
                    <div>
                        <p className="text-xl font-roboto text-[#E5E5E5] mt-8 mb-3">
                            Australia
                        </p>
                        <ul className="flex font-roboto">
                            <li className="text-[#CACACA] mr-8">Sydney</li>
                            <li className="text-[#CACACA] mr-8">Albury</li>
                            <li className="text-[#CACACA] mr-9">Queensland</li>
                            <li className="text-[#CACACA] mr-10">Adelaide </li>
                            <li className="text-[#CACACA] mr-11">Hobart</li>
                            <li className="text-[#CACACA] mr-10">Darwin</li>
                            <li className="text-[#CACACA] mr-10">Canberra</li>
                            <li className="text-[#CACACA] mr-11">Perth</li>
                            <li className="text-[#CACACA]">Melbourne</li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-xl font-roboto text-[#E5E5E5] mt-8 mb-3">
                            UAE
                        </p>
                        <ul className="flex font-roboto">
                            <li className="text-[#CACACA] mr-8">Dubai</li>
                            <li className="text-[#CACACA] mr-8">Abu Dhabi</li>
                            <li className="text-[#CACACA] mr-9">Sharjah</li>
                            <li className="text-[#CACACA] mr-10">Ajman </li>
                            <li className="text-[#CACACA] mr-11">Al Ain</li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-xl font-roboto text-[#E5E5E5] mt-8 mb-3">
                            USA
                        </p>
                        <ul className="flex font-roboto">
                            <li className="text-[#CACACA] mr-8">New York</li>
                            <li className="text-[#CACACA] mr-8">Los Angeles</li>
                            <li className="text-[#CACACA] mr-9">Chicago</li>
                            <li className="text-[#CACACA] mr-10">Houston </li>
                            <li className="text-[#CACACA] mr-11">
                                Philadelphia
                            </li>
                            <li className="text-[#CACACA] mr-10">San Diego </li>
                            <li className="text-[#CACACA] mr-10">Washington</li>
                            <li className="text-[#CACACA] mr-10">
                                Oklahoma City
                            </li>
                            <li className="text-[#CACACA] mr-10">Las Vegas </li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-xl font-roboto text-[#E5E5E5] mt-8 mb-3">
                            Maxico
                        </p>
                        <ul className="flex font-roboto">
                            <li className="text-[#CACACA] mr-8">Mexico City</li>
                            <li className="text-[#CACACA] mr-8">Ecatepec</li>
                            <li className="text-[#CACACA] mr-9">Guadalajara</li>
                            <li className="text-[#CACACA] mr-10">
                                Puebla City
                            </li>
                            <li className="text-[#CACACA] mr-11">
                                Ciudad Juárez
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className="mt-9 mb-9 opacity-[16%]" />
                <div className="flex items-center">
                    <img className="mr-16" src={logo} alt="logo" />
                    <p className="font-roboto text-xs text-[#CACACA] mr-14">
                        © 2021 Housesale Technologies Ltd.
                    </p>
                    <p className="font-roboto text-xs text-[#CACACA] mr-9">
                        1760 Dancing Dove Lane, New York, USA
                    </p>
                    <a
                        href="mailto:sales@housesales.com"
                        className="font-roboto text-xs text-[#CACACA] mr-24"
                    >
                        sales@housesales.com
                    </a>
                    <img
                        className="mr-12"
                        src={googleLogo}
                        alt="google play logo"
                    />
                    <img src={appleLogo} alt="app store logo" />
                </div>
            </div>
        </footer>
    );
};
