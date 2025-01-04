export const BookForm = () => {
    return (
        <div className="bookForm container flex flex-col items-center justify-center w-full h-[437px] bg-[#FFF5DA] mt-[100px] gap-5">
            <h2 className="font-nunito font-semibold text-4xl">
                Book professionals from your phone
            </h2>
            <p className="font-nunito text-xl text-[#646464]">
                Enter your mobile number to get the professionals help
            </p>
            <div className="flex border-[1px] border-black justify-between items-center w-[700px] h-[80px] bg-white pl-6 pr-6">
                <img src="./flag.png" alt="flag" />
                <button className="bg-backgroundColorVector text-3xl flex justify-center items-center font-nunito w-[150px] h-[60px]">
                    Send
                </button>
            </div>
        </div>
    );
};
