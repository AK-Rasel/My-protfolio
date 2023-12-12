/* eslint-disable react/no-unescaped-entities */
// import { useForm } from "react-hook-form";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
// import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
//     const form = useRef();
//     const {handleSubmit,register} = useForm()

//     const onSubmit = (data) => {
// console.log(data.name,data.email,data.message)
//     }
const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_t7iio0u', 'template_7g1z5tl', form.current, 'zGx8edpzuZtxO5hSY')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
};
    return (
        <div id="contact" className="flex justify-evenly items-center my-28 ">
            
            <div className="flex px-10 gap-20 flex-col lg:flex-row font-catamaran">
                {/* content */}
                <div className="text-center flex-1 lg:text-left">
                    <h1 className="text-5xl font-extrabold">DON'T BE SHY!</h1>
                    <p className="py-6 font-medium text-xl">Please don't hesitate to contact me. I'm excited to explore fresh projects, innovative concepts, or ways to contribute to your vision.</p>
                    <div className="flex -mt-4 gap-2 items-center">
                    <IoIosMail className="text-5xl" />
                        <h3 className="font-semibold text-xl border-l-2 border-[#1F2937] pl-2">raselak101010@gmail.com</h3>
                    </div>
                    <div className=" space-y-5 ">
                                <div className="space-x-3">
                                    {/* <Link to='mailto:raselak101010@gmail.com'>
                                    <button className="btn px-1 hover:bg-[#FF0000] hover:text-white  rounded-full text-4xl"><SiGmail /></button>
                                    </Link> */}
                                    
                                    <Link to='https://www.facebook.com/ak.rasel99/'>
                                    <button className="btn hover:bg-[#FF0000] hover:text-white px-1  rounded-full text-4xl"><FaFacebook /></button>
                                    </Link>
                                   
                                    <Link to='https://github.com/AK-Rasel'>
                                    <button className="btn hover:bg-[#FF0000] hover:text-white px-1  rounded-full text-4xl"><FaGithub /></button>
                                    </Link>
                                </div>

                                
                                
                            </div>
                    
                </div>
                {/* from */}
                <div className="flex-1 max-w-2xl">
                    
                <div className="card shrink-0  w-full  shadow-2xl bg-gradient-to-b from-red-600 to-[#111111] from-30%">
                    <form ref={form} onSubmit={sendEmail}className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white text-lg ">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className=" focus:outline-none input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white text-lg ">Email</span>
                            </label>
                            <input type="email" name="email"  placeholder="email" className="input input-bordered focus:outline-none" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white text-lg ">Message</span>
                            </label>
                            <textarea name="message"  className="focus:outline-none textarea textarea-bordered" placeholder="message"></textarea>
                           
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn text-lg  border-none  text-white transition ease-in-out delay-150 bg-red-600 hover:-translate-y-1 hover:scale-110 hover:text-[#1F2937] hover:bg-white hover:border-red-600 duration-300">Send Message</button>
                        </div>
                        {/* <div className="form-control mt-6">
                            <button className="btn border-none text-white bg-red-600 hover:text-[#1F2937] hover:bg-white">Send Message</button>
                        </div> */}
                    </form>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;