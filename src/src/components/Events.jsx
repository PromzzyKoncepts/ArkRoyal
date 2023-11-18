import EventIcon from '@mui/icons-material/Event';
import { LocationOn } from "@mui/icons-material";
import school from '../../assets/school.jpg'
import outreach from '../../assets/outreach.jpg';
import billsCleared from "../../assets/projects/billsCleared.jpg";
import menWalking from "../../assets/projects/hospitalVisit.jpg";


const Events = () => {
  const eventDetails = [
    {
      title: "Community Outreach",
      image: outreach,
      date: "Jan 03 2022",
      location: "Oji River, Ezeagu LGAs",
    },
    {
      title: "School Renovation",
      image: school,
      date: "may 27th, 2022",
      location: "New Haven Primary School, Enugu State",
    },
    {
      title: "Hospital Outreach",
      image: menWalking,
      date: "Sept 04, 2022",
      location: "ESUT Teaching Hospital, Parklane Enugu State",
    },
    {
      title: "Orthopaedic Visitation",
      image: billsCleared,
      date: "January 04, 2021",
      location: "Orthopaedic Hospital Enugu",
    },
  ];


  return (
    <div className="events" id="events">
      <h1 data-aos="fade-down">RECENT PROJECTS</h1>
      <p>
        Check back on our recently and previously concluded projects and events.
      </p>
      <div data-aos="fade-up">
        {eventDetails.map((event, index) => (
          <div
            key={index}
            className="event-details"
            style={{ backgroundImage: `url(${event.image})` }}
          >
            <div>
              <h3>{event.title}</h3>
              <p>
                <EventIcon /> {event.date}
              </p>
              <p>
                <LocationOn /> {event.location}
              </p>
              {/* <button>See More</button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
