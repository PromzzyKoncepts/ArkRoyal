// import AddBusinessIcon from "@mui/icons-material/AddBusiness";
// import SportsVolleyballIcon from "@mui/icons-material/SportsVolleyball";
// import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
// import HandshakeIcon from "@mui/icons-material/Handshake";
// import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
// import PeopleIcon from "@mui/icons-material/People";
import { Link } from "react-router-dom";
import white from "../../assets/white.jpg";

const Featuring = () => {
  return (
    <div>
      <div className="section2">
        <div className="whatwedo">
          <div>
            <h1>Creating Moments, Fostering Friendships</h1>
            <p className="description">
              <span>Welcome to Ark Royal Club</span> - Where every experience is
              a chapter in your story!
              <br />
              We are a passionate community of
              like-minded professionals from various fields who share a common
              goal: contributing our skills and expertise towards positive
              societal change. Together, we aim to create a supportive network
              that fosters collaboration, knowledge and meaningful connections.
              <br />
              As a club, we aspire to be at the forefront of positive change,
              leaving a lasting impact on communities and fostering a legacy of
              compassion and progress for generations to come. Together, let’s
              build a thriving social club that not only enhances our
              professional growth but also serves as a beacon of hope, igniting
              positive change and making the world a better place for everyone.
              <br />
              Join us on this incredible journey as we work hand in hand to
              build a society that thrives on unity, empathy, and progress.
            </p>
            <Link to='/about' className="about_link">About Us</Link>
          </div>
          <br />
          <br />
          
        </div>
        <div>
          <img src={white} className="div-image" />
        </div>
      </div>
    </div>
  );
};

export default Featuring;
