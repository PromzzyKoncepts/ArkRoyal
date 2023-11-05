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
        "https://www.rcsi.com/dublin/-/media/feature/news/dublin/stock-images/surgery-in-africa.jpg",
      date: "Sept 04, 2020",
      location: "ESUT Teaching Hospital, Parklane Enugu State",
    },
    {
      title: "Orthopaedic Visitation",
      image:
        "https://newvision-media.s3.amazonaws.com/cms/6cf11739-11a4-4791-a5fe-2e525a558b27.jpg",
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
              {/* <button>See More</button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
