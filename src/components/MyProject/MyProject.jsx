import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const MyProject = () => {
    const [myAllProject, setMyAllProject] = useState([])

    useEffect(() => {
        fetch("/project.json")
            .then(res => res.json())
            .then(data => setMyAllProject(data))
    }, [setMyAllProject])
    console.log(myAllProject)
    return (
        <div id="project" className="p-8">
            <div className="max-w-[1280px]   mx-auto mb-24">
                <div className="md:mx-24  mb-8 md:my-16 lg:mx-0  ">
                    <h1 className="md:text-6xl   lg:text-6xl text-3xl lg:text-center font-extrabold uppercase">My Project</h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                    {
                        myAllProject?.map(myProjectDetails => <Link to={`/myProjectDetails/${myProjectDetails.id}`} key={myProjectDetails.id} className="card  bg-base-100 shadow-xl">
                            <figure><img src={myProjectDetails.main_image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {myProjectDetails.project_name}

                                </h2>
                                <p>{myProjectDetails.short_paragraph}</p>
                               
                                <div className="mt-4 text-red-600">
                                    {myProjectDetails.technology.map(technologys =>
                                        <p className="flex flex-wrap gap-2 text   font-bold  " key={technologys.index}>
                                            <div className="flex gap-3">
                                                <span>{technologys.name_1}</span>
                                                <span>{technologys.name_2}</span>
                                            </div>
                                            <div className="flex gap-3">
                                                <span>{technologys.name_3}</span>
                                                <span>{technologys.name_4}</span>
                                            </div>
                                            <div className="flex gap-3">
                                                <span>{technologys.name_5}</span>
                                                <span>{technologys.name_6}</span>
                                            </div>
                                        </p>)}
                                </div>


                            </div>
                        </Link>)
                    }
                </div>

            </div>
        </div>
    );
};

export default MyProject;