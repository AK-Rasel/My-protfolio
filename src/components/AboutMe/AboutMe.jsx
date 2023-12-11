import { FaFacebook, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const AboutMe = () => {
    return (
        <div className="">
            <div className="flex justify-between items-center min-h-[calc(100vh-52px)]  container mx-auto">
                <div className="hero-content mt-40 gap-36 lg:max-w-none md:max-w-xl mx-auto justify-start  flex-col  lg:flex-row-reverse ">
                    <div className="w-full flex flex-1 justify-start relative">
                        {/* border */}
                        <div className="
                        w-[66%] h-full
                        bg-gradient-to-r from-red-500 to-blue-500 p-2
                         absolute 
                         -top-16 
                         
                         left-[16%]
                         rounded-lg 
                         -z-10 ">
                         <div className="bg-white rounded-md  p-5 h-full"></div>
                        </div>
                        {/* img */}
                        <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="w-[66%]  rounded-lg shadow-2xl mr-10" />
                    </div>
                    <div className="font-catamaran flex-1  text-start lg:text-start">
                        <h1 className="md:text-7xl  text-6xl font-extrabold 
                        
                        bg-gradient-to-r from-red-500 to-blue-500 inline-block text-transparent bg-clip-text
                        ">About Me</h1>

                        <p className="py-6 font-normal text-lg lg:text-2xl"><span className="font-semibold bg-gradient-to-r from-red-500 to-blue-500 inline-block text-transparent bg-clip-text">Junior web developer</span> proficient in React, JavaScript, HTML, and CSS, with a foundational understanding of backend concepts using Express and MongoDB. Passionate about crafting user-centric web experiences and continuously expanding skills in both frontend and backend development.</p>
                        <div className="md:text-2xl text-xl space-y-2 md:space-y-3" >
                            <h3 ><span className="md:font-bold font-semibold ">NAME :</span> Md.Abdul Khalek Rasel</h3>
                            <h3> <span className="md:font-bold font-semibold ">DATE OF BIRTH :</span> 05 January 1999</h3>
                            <h3> <span className="md:font-bold font-semibold ">NATIONALITY :</span> Bangladeshi</h3>
                            <h3> <span className="md:font-bold font-semibold ">ADDRESS</span> : Library Bazar RD ,Pabna Rajshahi </h3>
                            {/* <h3> <span className="font-bold "></span>E-MAIL: raselak101010@gmail.com</h3> */}
                            <div className="space-y-5 ">
                                <div className="space-x-3">
                                    <button className="btn px-1  rounded-full text-4xl"><SiGmail /></button>
                                    <button className="btn px-1  rounded-full text-4xl"><FaFacebook /></button>
                                    <button className="btn px-1  rounded-full text-4xl"><FaGithub /></button>
                                </div>

                                <button className="btn text-white font-bold font-catamaran text-lg outline-none border-none   hover:bg-gradient-to-l from-red-500 to-blue-500
                                bg-gradient-to-r from-red-500 to-blue-500
                                hover:outline
                                ">Downlod Resume</button>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutMe;