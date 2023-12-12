/* eslint-disable react/no-unescaped-entities */
import { FaFacebook, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";
import raselCv from '../../../public/raselCv.pdf'
import BannerImg from '../../assets/IMG20231212113223.jpg'
const AboutMe = () => {
    return (
        <div id="about" className="">
            <div  className="flex justify-between items-center min-h-[calc(100vh-52px)]  container mx-auto">
                <div className="hero-content mt-40 gap-36 lg:max-w-none md:max-w-xl mx-auto justify-start  flex-col  lg:flex-row-reverse ">
                    <div className="w-full lg:ml-10  flex flex-1 justify-start relative">
                        {/* border */}
                        <div className="
                        w-[66%] h-full
                        bg-gradient-to-t from-[#FF0000] to-[#111111] from-30% p-2
                         absolute 
                         -top-16 
                         
                         left-[12%]
                         rounded-lg 
                         -z-10 ">
                         <div className="bg-white rounded-md  p-5 h-full"></div>
                        </div>
                        {/* img */}
                        <img src={BannerImg} className="w-[66%]  rounded-lg shadow-2xl mr-10" />
                    </div>
                    <div className="font-catamaran flex-1  text-start lg:text-start">
                        <h1 className="md:text-7xl  text-3xl font-extrabold 
                        
                       
                        ">About Me</h1>

                        <p className="py-6 font-normal text-xl lg:text-2xl"><span className="font-semibold text-[#FF0000]">- I'm Junior web developer</span> proficient in React, JavaScript, HTML, and CSS, with a foundational understanding of backend concepts using Express and MongoDB. Passionate about crafting user-centric web experiences and continuously expanding skills in both frontend and backend development.</p>
                        <div className="md:text-2xl text-xl space-y-2 md:space-y-3" >
                            <h3 ><span className="md:font-bold font-semibold ">NAME :</span> Md.Abdul Khalek Rasel</h3>
                            <h3> <span className="md:font-bold font-semibold ">DATE OF BIRTH :</span> 05 January 1999</h3>
                            <h3> <span className="md:font-bold font-semibold ">NATIONALITY :</span> Bangladeshi</h3>
                            <h3> <span className="md:font-bold font-semibold ">ADDRESS</span> : Library Bazar RD ,Pabna Rajshahi </h3>
                            {/* <h3> <span className="font-bold "></span>E-MAIL: raselak101010@gmail.com</h3> */}
                            <div className="space-y-5 ">
                                <div className="space-x-3">
                                    <Link to='mailto:raselak101010@gmail.com'>
                                    <button className="btn px-1 hover:bg-[#FF0000] hover:text-white  rounded-full text-4xl"><SiGmail /></button>
                                    </Link>
                                    
                                    <Link to='https://www.facebook.com/ak.rasel99/'>
                                    <button className="btn hover:bg-[#FF0000] hover:text-white px-1  rounded-full text-4xl"><FaFacebook /></button>
                                    </Link>
                                   
                                    <Link to='https://github.com/AK-Rasel'>
                                    <button className="btn hover:bg-[#FF0000] hover:text-white px-1  rounded-full text-4xl"><FaGithub /></button>
                                    </Link>
                                </div>

                                <button className="btn text-lg  border-none  text-white  hover:text-white transition ease-in-out delay-150 bg-[#1F2937] hover:-translate-y-1 hover:scale-110 hover:text-[#1F2937] hover:bg-[#FF0000] hover:border-red-600 duration-300
                                "><a href={raselCv} download='raselCv'>Downlod CV</a></button>
                                
                            </div>
                            {/* text-white font-bold font-catamaran text-lg outline-none border-none   hover:bg-[#FF0000] bg-[#1F2937]
                                hover:outline */}
                           
                        </div>


                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutMe;