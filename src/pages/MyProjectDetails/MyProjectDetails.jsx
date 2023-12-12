import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import Navbar2 from "../../components/Navbar/Navbar2";


const MyProjectDetails = () => {
    const [projectDetail, setProjectDetail] = useState([])
    const projectDetails = useLoaderData()
    const { id } = useParams()
    const { project_name, short_paragraph, features,img_url_1,img_url_2,img_url_3,name_1,name_2,name_3,name_4,name_5,name_6,name_7,name_8,website_links} = projectDetail


    useEffect(() => {
        const findServices = projectDetails?.find(projectDetail => projectDetail.id == id)
        setProjectDetail(findServices)
    }, [id, projectDetails])

    console.log(projectDetail)

    const AutoplaySlider = withAutoplay(AwesomeSlider);
    console.log(website_links)

    return (
    <div>
<Navbar2/>
        <div className="p-8 ">
            <div className="grid items-center  min-h-screen font-catamaran">
                <div className="flex items-center p-40 gap-8 flex-col lg:flex-row-reverse">
                    <AutoplaySlider
                    className='flex-1'
                        play={true}
                        // cancelOnInteraction={false} // should stop playing on user interaction
                        interval={2000}
                    >
                        
                        <div data-src={img_url_1} />
                        <div data-src={img_url_2} />
                        <div data-src={img_url_3} />
                        
                      
                    </AutoplaySlider>
                    <div className="flex-1">
                        <h1 className="text-5xl font-bold text-red-600">{project_name}</h1>
                        <p className="py-6 font-semibold text-xl ">{short_paragraph}</p>
                        
                        <div>
                            <h3 className="font-bold text-2xl">Features</h3>
                            <div className="font-medium text-lg">
                                {Object.keys(features || {}).map((key, index) => (
                                    <ul className="list-disc list-inside" key={index}>
                                        <li>{features[key]}</li>
                                    </ul>
                                ))}
                            </div>
                            
                        </div>
                        {/* <Link to={website_links}> Live link</Link> */}
                        <button className="btn font-bold mt-5 hover:bg-red-600 text-white bg-[#1F2937] text-xl"><a href={website_links} >Live Link</a></button>
                        <div className="flex text-red-600  justify-start gap-5  font-bold text-lg flex-wrap">
                        <p className="py-6 ">{name_1}</p>
                        <p className="py-6">{name_2}</p>
                        <p className="py-6">{name_3}</p>
                        <p className="py-6">{name_4}</p>
                        <p className="py-6">{name_5}</p>
                        <p className="py-6">{name_6}</p>
                        <p className="py-6">{name_7}</p>
                        <p className="py-6">{name_8}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default MyProjectDetails;