// import { useState } from "react";
import "../../Stylesheets/About.css";
import Header from "../components/Header";
import award from "../../assets/projects/award.jpg";
import sickChild from "../../assets/projects/sickChild.jpg";
import community from "../../assets/projects/community.jpg";
import schoolVisit from "../../assets/projects/schoolVisit.jpg";
import hospitalVisit from "../../assets/projects/hospitalVisit.jpg";
import renovation from "../../assets/school.jpg"; // Import the missing image
import group from "../../assets/group.jpg";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Footer from "../components/Footer";

const Projects = () => {
  // const [expandedProject, setExpandedProject] = useState(null);

  const data = [
    {
      image: award,
      date: "27th May",
      location: "ESUT Teaching Hospital, Parklane, Enugu State",
      title: "Children's Day",
    },

    {
      image: community,
      date: "11th Dec",
      location: "Iwollo Ezeagu LGA, Enugu",
      title: "Community Visit",
    },
    {
      image: schoolVisit,
      date: "27th May",
      location: "New Haven Primary School, New Haven, Enugu State",
      title: "School Visitation",
    },
    {
      image: renovation,
      date: "11th Dec",
      location: "New Haven Primary School, Enugu",
      title: "School Building Renovation",
    },
    {
      image: sickChild,
      date: "27th May",
      location: "ESUT Teaching Hospital, Parklane, Enugu State",
      title: "Children's Day",
    },
    {
      image: hospitalVisit,
      date: "11th Dec",
      location: "ESUT Teaching Hospital, Parklane, Enugu State",
      title: "Hospital Visitation",
    },
  ];

  // const toggleExpand = (index) => {
  //   if (expandedProject === index) {
  //     setExpandedProject(null);
  //   } else {
  //     setExpandedProject(index);
  //   }
  // };

  return (
    <div className="body">
      <Header />
      <div className="AboutCont" style={{ backgroundImage: `url(${group})` }}>
        <h1>PROJECTS | GALLERY</h1>
      </div>
      <div className="pointer-icon"></div>
      <div className="project_body">
        {data.map((project, index) => (
          <div key={index} className="project-item">
            <img src={project.image} className="img" alt="projects" />
            <h6 className="project_date">{project.date}</h6>
            <div className="project_icons">
              <AdsClickIcon fontSize="small" />
            </div>
            <div className="project-details">
              <h6>{project.title}</h6>
              <small>
                <LocationOnIcon fontSize="small" />
                {project.location}
              </small>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
