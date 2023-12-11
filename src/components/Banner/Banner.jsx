/* eslint-disable react/no-unescaped-entities */


const Banner = () => {
    return (
        <div className="bg-[#02CFA3]">
            <div className="flex justify-between items-center min-h-[calc(100vh-52px)]  container mx-auto">
                <div className="hero-content mt-40 lg:max-w-none md:max-w-xl mx-auto   flex-col  lg:flex-row ">
                    <div className="w-full flex justify-center relative">
                        <div className="w-[66%] h-full border-white border-8 absolute -top-16 left-[25%] rounded-lg -z-10 "></div>
                    <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="w-[66%]  rounded-lg shadow-2xl mr-10" />
                    </div>
                    <div className="font-catamaran text-white text-center lg:text-start">
                        <h1 className="md:text-6xl  text-4xl font-bold">I'm Junior Web Developer</h1>
                        <p className="py-6 font-medium text-lg">Junior web developer proficient in React, JavaScript, HTML, and CSS, with a foundational understanding of backend concepts using Express and MongoDB. Passionate about crafting user-centric web experiences and continuously expanding skills in both frontend and backend development.</p>
                        <button className="btn btn-primary">Hire Me</button>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Banner;