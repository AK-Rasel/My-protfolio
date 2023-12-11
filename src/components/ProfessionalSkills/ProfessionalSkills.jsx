import ProgressBar from "@ramonak/react-progress-bar";

const ProfessionalSkills = () => {
    return (
        // className=" min-h-[calc(100vh-52px)] container mx-auto"
        <div className=" py-5">

            <div id="skills" className="container   mx-auto mb-24" >
                <div className="mx-24  my-16 lg:mx-0 md:text-6xl  text-6xl lg:text-center font-extrabold ">
                    <h1>Professional Skills</h1>
                </div>
                <div className="gap-10  px-8 grid grid-cols-1 lg:grid-cols-2 justify-evenly">
                    <div>
                        <h1>html</h1>
                        <ProgressBar className="lg:w-[36rem] " bgColor='red' completed={100} />
                    </div>
                    <div>
                        <h1>css</h1>
                        <ProgressBar className="lg:w-[36rem] " bgColor='red' completed={100} />
                    </div>
                    <div>
                        <h1>javascript</h1>
                        <ProgressBar bgColor='red' className="lg:w-[36rem] " completed={60} />
                    </div>
                    <div>
                        <h1>react</h1>
                        <ProgressBar bgColor='red' className="lg:w-[36rem] " completed={50} />
                    </div>
                    <div>
                        <h1>mongodb</h1>
                        <ProgressBar bgColor='red' className="lg:w-[36rem] " completed={40} />
                    </div>
                    <div>
                        <h1>Express.js</h1>
                        <ProgressBar bgColor='red' className="lg:w-[36rem] " completed={20} />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProfessionalSkills;