/* eslint-disable react/no-unescaped-entities */

import AboutMe from "../../components/AboutMe/AboutMe";
import Banner from "../../components/Banner/Banner";
import ProfessionalSkills from "../../components/ProfessionalSkills/ProfessionalSkills";
import Footer from "../../components/footer/Footer";
// import ExperienceAndEducation from "../../components/experience & education/ExperienceAndEducation";


const Home = () => {
    return (
        <div>
            <Banner/>
        <AboutMe/>
        {/* <ExperienceAndEducation/> */}
        <ProfessionalSkills/>
        <Footer/>
        </div>


    );
};

export default Home;