import { RiGraduationCapFill } from "react-icons/ri";


const ExperienceAndEducation = () => {
    return (
        <div className="p-5">
            {/* <div className="  max-w-[1280px]   mx-auto mb-24">
           
           <div className="md:mx-24  mb-8 md:my-16 lg:mx-0  ">
                   <h1 className="md:text-6xl   lg:text-6xl text-5xl lg:text-center font-extrabold uppercase">Education</h1>
               </div>
           <div className="grid  lg:mx-0 gap-2  grid-cols-1  lg:grid-cols-3 ">
               <div className="card md:w-auto  w-96 bg-base-100 border-2 border-rose-600 hover:shadow-rose-500 hover:shadow-lg">
                   <div className="card-body">
                       <h2 className="card-title uppercase"> web developer</h2>
                       <p>I learned this web design development from Programming Hero here very carefully taught from basics to jobs in six months</p>
                       <div className="card-actions justify-end">

                       </div>
                   </div>
               </div>
               <div className="card  md:w-auto  w-96 bg-base-100 border-2 border-rose-600 hover:shadow-rose-500 hover:shadow-lg">
                   <div className="card-body">
                       <h2 className="card-title">ENGINEERING DEGREE</h2>
                       <p>Completed Civil Engineering Diploma in Engineering Examination in the
                           year 2022. Polytechnic Institute, Pabna Bangladesh</p>
                       <div className="card-actions justify-end">

                       </div>
                   </div>
               </div>
               <div className="card  md:w-auto  w-96 bg-base-100 border-2 border-rose-600 hover:shadow-rose-500 hover:shadow-lg">
                   <div className="card-body">
                       <h2 className="card-title">ENGINEERING DEGREE</h2>
                       <p>Completed Civil Engineering Diploma in Engineering Examination in the
                           year 2022. Polytechnic Institute, Pabna Bangladesh</p>
                       <div className="card-actions justify-end">

                       </div>
                   </div>
               </div>
           </div>
       </div> */}
            <div className=" max-w-[1280px]   mx-auto mb-24">
            <div className="md:mx-24  mb-8 md:my-16 lg:mx-0  ">
                    <h1 className="md:text-6xl   lg:text-6xl text-3xl lg:text-center font-extrabold uppercase ">Experience &
                    Education</h1>
                </div>
                <ul className="timeline timeline-vertical">

                    <li>
                        <div className="timeline-middle">
                            <RiGraduationCapFill className="text-red-600 text-5xl" />
                        </div>
                        <hr />
                    </li>
                    <li>

                        <div className="timeline-start  timeline-box bg-red-600 text-white text-end">
                            <h4>2018</h4>
                            <h3 className="font-extrabold text-xl mb-2">Higher Secondary Examination</h3>
                            <p className=" text-lg">Technical Institute, Pabna </p>
                        </div>


                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-end  bg-red-600 text-white timeline-box">
                            
                            <h3 className="font-extrabold text-xl mb-2">Web developer</h3>
                            <p>Passionate junior web developer skilled in React, JavaScript, HTML, CSS, Express, MongoDB; dedicated to user-centric web experiences and ongoing full-stack growth.</p>

                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-start bg-red-600 text-white timeline-box text-end">
                            <h4>2022</h4>
                            <h3 className="font-extrabold text-xl mb-2"> Engineering Diploma </h3>
                            <p className=" text-lg">Polytechnic Institute, Pabna</p>
                        </div>
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        
                    </li>


                </ul>
            </div>
        </div>
    );
};

export default ExperienceAndEducation;