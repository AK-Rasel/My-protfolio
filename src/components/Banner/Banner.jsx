/* eslint-disable react/no-unescaped-entities */
// import Typewriter from 'react-ts-typewriter';
import BannerImg from '../../assets/IMG20231212113223.jpg'

const Banner = () => {
    return (
        <div id="banner" className="bg-gradient-to-b from-red-600 to-[#111111] from-30% py-5">
            <div className="flex justify-between items-center min-h-[calc(100vh-28px)]  container mx-auto">
                <div className="hero-content  mt-40 lg:max-w-none md:max-w-xl mx-auto  justify-start flex-col  lg:flex-row ">
                    <div className="w-full flex-1 flex justify-start relative">
                        <div className="w-[66%] h-full border-white border-8 absolute -top-16 left-[10%] rounded-lg -z-10 "></div>
                        <img src={BannerImg} className="w-[56%] h-[10%]  rounded-lg shadow-2xl mr-10" />
                    </div>
                    <div className="font-catamaran flex-1 text-white text-start">
                        <h1 className="md:text-6xl  text-5xl font-extrabold">  Welcome to my portfolio.</h1>
                       
                        <p className="py-6 font-medium text-xl">I am a junior web developer proficient in React, JavaScript, HTML and CSS, with a basic understanding of backend concepts using Express and MongoDB..</p>
                        <button className="btn text-white font-bold font-catamaran text-lg outline-none border-none   bg-red-600 hover:bg-red-500
                                hover:outline
                                "><a href="#contact">Hire Me</a></button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;