import { SocialIcon } from "react-social-icons";
import "../../Stylesheets/About.css";
import Persons from "../data/People";

function People() {
  return (
    <div className="peopleComponent">
      <h1 className="members">Our Members</h1>
      <div className="PeopleContainer">
        {Persons.map((person, index) => (
          <div key={index}>
            <div>
              <img
                src={person.picture}
                className="people_image"
                alt="member image"
              />
            </div>
            <div className="person_details">
              <h3>{person.name}</h3>
              <small>{person.position}</small>
              <p>{person.company}</p>
              <small>{person.profession}</small>
              <div>
                <SocialIcon
                  className="socialIcon"
                  fontSize="small"
                  url={person.IGUrl}
                  bgColor="#ffffff25"
                  />
                <SocialIcon
                  bgColor="#ffffff25"
                  className="socialIcon"
                  fontSize="small"
                  url={person.fbUrl}
                />
                <SocialIcon
                  bgColor="#ffffff25"
                  className="socialIcon"
                  fontSize="small"
                  url={person.linkedIn}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default People;
