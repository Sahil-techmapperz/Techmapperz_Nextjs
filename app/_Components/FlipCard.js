"use client";

const FlipCard = ({ backImage = "", backdiv_arr = [], title = "" }) => {
    return (
        <div className="group relative cursor-pointer w-full h-80 mb-6 flex flex-col justify-center items-center bg-gradient-to-b from-blue-900/90 to-blue-700/60 rounded-md overflow-hidden">
            {/* Background Image */}
            {backImage && (
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url("${backImage}")` }}
                ></div>
            )}

            {/* Overlay Content */}
            <div className="absolute inset-0 px-6 py-4 bg-gradient-to-b from-blue-900/80 to-blue-700/70 text-white flex flex-col">
                {/* Title */}
                {title && (
                    <p
                        className="underline text-lg w-max absolute text-center lg:text-2xl font-semibold transition-transform duration-500 ease-out  group-hover:translate-y-[-150%]"
                        style={{
                            bottom: "calc(50%)", 
                            left: "calc(20%)", 
                           
                        }}
                    >
                        {title}
                    </p>
                )}

                {/* List of Items */}
                <div className="absolute bottom-4 w-full left-1/2 transform translate-x-[150%] space-y-2 transition-transform duration-[600ms] ease-out group-hover:translate-x-[-25%]"
                style={{
                    bottom: "calc(10%)", 
                    left: "calc(45%)",
                   
                }}
                >
                    {backdiv_arr.map((item, index) => (
                        <p key={index} className="max-sm:text-[14px] font-bold max-lg:text-lg ">
                            {item}
                        </p>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default FlipCard;
