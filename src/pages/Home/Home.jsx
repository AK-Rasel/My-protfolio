/* eslint-disable react/no-unescaped-entities */

import AboutMe from "../../components/AboutMe/AboutMe";
import Banner from "../../components/Banner/Banner";
import Contact from "../../components/Contact/Contact";
import ProfessionalSkills from "../../components/ProfessionalSkills/ProfessionalSkills";
import Footer from "../../components/footer/Footer";
import ExperienceAndEducation from "../../components/experience & education/ExperienceAndEducation";
import MyProject from "../../components/MyProject/MyProject";


const Home = () => {
    return (
        <div>
            <Banner/>
        <AboutMe/>
        <ExperienceAndEducation/>
        <ProfessionalSkills/>
        <MyProject/>
        <Contact/>
        <Footer/>
        </div>


    );
};

export default Home;