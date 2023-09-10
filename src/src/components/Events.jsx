import react from "react";
import EventIcon from '@mui/icons-material/Event';
import { LocationOn } from "@mui/icons-material";

const Events = () => {
  const eventDetails = [
    {
      title: "Motherless Babies Visit",
      image:
        "https://media.istockphoto.com/id/143922546/photo/group-of-african-orphan-children.jpg?s=612x612&w=0&k=20&c=RpKm-4iCJGJ_6ukzmMDxk1lTXhGp7VoYchb_sBLKqtY=",
      date: "March 04, 2024",
      location: "High St, London E15 2JG, United Kingdom",
    },
    {
      title: "Motherless Babies Visit",
      image:
        "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      date: "March 04, 2024",
      location: "High St, London E15 2JG, United Kingdom",
    },
    {
      title: "Motherless Babies Visit",
      image:
        "https://images.unsplash.com/photo-1597762117709-859f744b84c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      date: "March 04, 2024",
      location: "High St, London E15 2JG, United Kingdom",
    },
    {
      title: "Motherless Babies Visit",
      image:
        "https://media.istockphoto.com/id/1130184734/photo/portrait-of-farm-children.jpg?s=612x612&w=0&k=20&c=yDKGL6_cHnJjf3YLCeEyxoDihmd7xK-wbcFMpdrEPtk=",
      date: "March 04, 2024",
      location: "High St, London E15 2JG, United Kingdom",
    },
  ];


  return (
    <div className="events" id="events">
      <h1>UPCOMING EVENTS</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quae quam animi mollitia sapiente, tenetur amet eligendi, ratione qui corporis repellendus debitis fuga quis molestias sed? Mollitia doloremque accusantium, nam eaque ab nostrum vero placeat dolorum laborum eveniet modi nobis necessitatibus doloribus similique dolore.</p>
      <div>
        {eventDetails.map((event, index) => (
          <div
            key={index}
            className="event-details"
            style={{ backgroundImage: `url(${event.image})` }}
          >
            <div>
              <h2>{event.title}</h2>
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
