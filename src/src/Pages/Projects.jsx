// import { useState } from "react";
import "../../Stylesheets/About.css";
import Header from "../components/Header";
import award from "../../assets/projects/award.jpg";
import billsCleared from "../../assets/projects/billsCleared.jpg";
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
      date: "27th May 2021",
      location: "ESUT Teaching Hospital, Parklane, Enugu State",
      title: "Children's Day",
    },

    {
      image: community,
      date: "3rd Jan 2022",
      location: "Iwollo Ezeagu LGA, Enugu",
      title: "Community Visit",
    },
    {
      image: schoolVisit,
      date: "30th July 2021",
      location: "New Haven Primary School, New Haven, Enugu State",
      title: "School Outreach",
    },
    {
      image: renovation,
      date: "30th July 2021",
      location: "New Haven Primary School, Enugu",
      title: "School Building Renovation",
    },
    {
      image: billsCleared,
      date: "27th May 2023",
      location: "National Orthopaedic Hospital, Enugu State",
      title: "Orthopaedic Hospital Visit",
    },
    {
      image: hospitalVisit,
      date: "27th May 2021",
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
            <p className="project_date">{project.date}</p>
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
