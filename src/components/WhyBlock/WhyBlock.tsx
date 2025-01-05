import promote from "../../../public/promote.png";
import group from "../../../public/group.png";
import group2 from "../../../public/group2.png";
import house2 from "../../../public/house-2.png";

export const WhyBlock = () => {
    return (
        <div className="whyBlock mt-24">
            <div className="container">
                <h2 className="font-nunito text-4xl font-semibold">
                    Why HOUSESALE Company?
                </h2>
                <div className="flex justify-between">
                    <div className="flex flex-col gap-12 mt-[72px]">
                        <div className="group flex gap-7">
                            <img src={promote} alt="promote" />
                            <div>
                                <h3 className="font-nunito text-3xl">
                                    Transparent pricing
                                </h3>
                                <p className="font-nunito text-xl">
                                    See fixed prices before you book. No hidden
                                    charges.
                                </p>
                            </div>
                        </div>
                        <div className="group flex gap-7">
                            <img src={group} alt="group" />
                            <div>
                                <h3 className="font-nunito text-3xl">
                                    Experts only
                                </h3>
                                <p className="font-nunito text-xl">
                                    Our professionals are well trained and have
                                    on-job expertise.
                                </p>
                            </div>
                        </div>
                        <div className="group flex gap-7">
                            <img src={group2} alt="group2" />
                            <div>
                                <h3 className="font-nunito text-3xl">
                                    Fully equipped
                                </h3>
                                <p className="font-nunito text-xl">
                                    We bring everything needed to get the job
                                    done well.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="bg-backgroundColorVector absolute w-[475px] h-[430px] right-[20px]" />
                        <img
                            className="relative bottom-7"
                            src={house2}
                            alt="house-2"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
