import ProgressBar from "@ramonak/react-progress-bar";

const ProfessionalSkills = () => {
    return (
        // className=" min-h-[calc(100vh-52px)] container mx-auto"
        <div id="skills" className=" p-9 ">

            <div  className="max-w-[1280px]   mx-auto mb-24" >
                <div className="md:mx-24  mb-8 md:my-16 lg:mx-0  ">
                    <h1 className="md:text-6xl   lg:text-6xl text-5xl lg:text-center font-extrabold uppercase">My Skills</h1>
                </div>
                <div className="gap-10   grid grid-cols-1 lg:grid-cols-2 justify-evenly">
                    <div>
                        <h1 className="font-bold text-lg uppercase">html</h1>
                        <ProgressBar className="lg:w-[30rem] " bgColor='red' completed={100} />
                    </div>
                    <div>
                        <h1 className="font-bold text-lg uppercase">css</h1>
                        <ProgressBar className="lg:w-[30rem] " bgColor='red' completed={100} />
                    </div>
                    <div>
                        <h1 className="font-bold text-lg uppercase">javascript</h1>
                        <ProgressBar bgColor='red' className="lg:w-[30rem] " completed={60} />
                    </div>
                    <div>
                        <h1 className="font-bold text-lg uppercase">react</h1>
                        <ProgressBar bgColor='red' className="lg:w-[30rem] " completed={50} />
                    </div>
                    <div>
                        <h1 className="font-bold text-lg uppercase">mongodb</h1>
                        <ProgressBar bgColor='red' className="lg:w-[30rem] " completed={40} />
                    </div>
                    <div>
                        <h1 className="font-bold text-lg uppercase">Express.js</h1>
                        <ProgressBar bgColor='red' className="lg:w-[30rem] " completed={20} />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProfessionalSkills;