

const ExperienceAndEducation = () => {
    return (
        <div className=" min-h-[calc(100vh-52px)] container mx-auto">
            <div className="mx-24  my-16 lg:mx-0 md:text-6xl  text-6xl lg:text-center font-extrabold ">
                <h1>EDUCATION</h1>
            </div>
            <div className="grid mx-12 lg:mx-0 gap-2  grid-cols-1  lg:grid-cols-3 px-5">
                <div className="card md:w-auto  w-96 bg-base-100 border-2 border-rose-600 hover:shadow-rose-500 hover:shadow-lg">
                    <div className="card-body">
                        <h2 className="card-title uppercase"> web developer</h2>
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
        </div>
    );
};

export default ExperienceAndEducation;