import Header from "../components/Header";
import group from "../../assets/group.jpg";
import Footer from "../components/Footer";
import People from "../components/People";
import AboutSection1 from "../components/AboutSection1";


const About = () => {
  return (
    <div>
      <Header />
      <div>
        <div className="AboutCont" style={{ backgroundImage: `url(${group})` }}>
          <h1>About Us</h1>
        </div>
        <div>
          <AboutSection1 />
          <hr />
          <br />
          <div className="AboutSection2">
            <div>
              <h3>Who We Are</h3>
              <p>
                We are a passionate community of like-minded professionals from
                various fields who share a common goal: contributing our skills
                and expertise towards positive societal change. Together, we aim
                to create a supportive network that fosters collaboration,
                knowledge and meaningful connections.
                <br />
                <br />
                As a club, we aspire to be at the forefront of positive change,
                leaving a lasting impact on communities and fostering a legacy
                of compassion and progress for generations to come.
                <br />
                Join us on this incredible journey as we work hand in hand to
                build a society that thrives on unity, empathy, and progress.
              </p>
            </div>
            <div>
              <h3>Our Mission</h3>
              <p>
                Our mission is to harness the collective power of professionals
                who are committed to making a difference in the society and
                through collaboration and various initiatives, we strive to
                address pressing social issues, promote sustainable practices,
                and empower marginalized communities.
                <br />
                <br />
                By leveraging our diverse backgrounds and expertise, we aim to
                lead by example and inspire others to take an active role in
                building a more equitable and compassionate world.
              </p>
            </div>
            <div>
              <h3>Our Vision</h3>
              <p>
                Our vision is to be a driving force in the transformation of the
                society through the constructive efforts of our members. We
                envision a future where professionals come together, united in
                their dedication to social responsibility. As a club, we aspire
                to be at the forefront of positive change, leaving a lasting
                impact on communities and fostering a legacy of compassion and
                progress for generations to come.
                <br />
                Together, let’s build a thriving social club that not only
                enhances our professional growth but also serves as a beacon of
                hope, igniting positive change and making the world a better
                place for everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="section_people">
      <People />
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
