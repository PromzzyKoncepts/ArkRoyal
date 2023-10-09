import EventIcon from '@mui/icons-material/Event';
import { LocationOn } from "@mui/icons-material";
import school from '../../assets/school.jpg'
import outreach from '../../assets/outreach.jpg'

const Events = () => {
  const eventDetails = [
    {
      title: "Community Outreach",
      image: outreach,
      date: "March 04, 2024",
      location: "High St, London E15 2JG, United Kingdom",
    },
    {
      title: "School Renovation",
      image: school,
      date: "Dec 04, 2023",
      location: "New Haven Primary School, Enugu State",
    },
    {
      title: "Hospital Outreach",
      image:
        "https://images.unsplash.com/photo-1597762117709-859f744b84c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      date: "Sept 04, 2020",
      location: "ESUT Teaching Hospital, Parklane Enugu State",
    },
    {
      title: "Orthopaedic Visitation",
      image:
        "https://media.istockphoto.com/id/1130184734/photo/portrait-of-farm-children.jpg?s=612x612&w=0&k=20&c=yDKGL6_cHnJjf3YLCeEyxoDihmd7xK-wbcFMpdrEPtk=",
      date: "January 04, 2021",
      location: "Orthopaedic Hospital Enugu",
    },
  ];


  return (
    <div className="events" id="events">
      <h1>RECENT PROJECTS/EVENTS</h1>
      <p>Check back on our recently and previously concluded projects and events.</p>
      <div>
        {eventDetails.map((event, index) => (
          <div
            key={index}
            className="event-details"
            style={{ backgroundImage: `url(${event.image})` }}
          >
            <div>
              <h3>{event.title}</h3>
              <p><EventIcon /> {event.date}</p>
              <p><LocationOn/> {event.location}</p>
              <button>See More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
