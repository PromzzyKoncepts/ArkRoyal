import { useState } from "react";
import logo from "../../assets/logo.png";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import FormHelperText from "@mui/joy/FormHelperText";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  const [data, setData] = useState({
    email: "",
    status: "initial",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setData((current) => ({ ...current, status: "loading" }));
    try {
      // Replace timeout with real backend operation
      setTimeout(() => {
        setData({ email: "", status: "sent" });
      }, 1500);
    } catch (error) {
      setData((current) => ({ ...current, status: "failure" }));
    }
  };

  return (
    <div className="footer-container">
      <div className="footer" id="contact">
        <div className="logo_social">
          <div>
            <img src={logo} className="logo-image" />
            <h1>
              <span>Ark</span>Royal
            </h1>
          </div>

          <div>
            <h5>Follow us on:</h5>
            <SocialIcon
              url="https://twitter.com/arkroyal_club"
              bgColor="#666666"
            />
            <SocialIcon
              url="https://facebook.com/arkroyal_club/"
              bgColor="#666666"
            />
            <SocialIcon
              url="https://www.instagram.com/arkroyal_club/"
              bgColor="#666666"
            />
            <SocialIcon
              url="https://mailto:okechukwupromise638@gmail.com"
              bgColor="#666666"
            />
          </div>
        </div>
        <div className="newsletter">
          <form onSubmit={handleSubmit} id="demo">
            <FormControl>
              <FormLabel
                sx={(theme) => ({
                  "--FormLabel-color": theme.vars.palette.primary.plainColor,
                })}
              >
                Subscribe to our Newsletter
              </FormLabel>
              <Input
                sx={{ "--Input-decoratorChildHeight": "45px" }}
                placeholder="example@gmail.com"
                type="email"
                required
                value={data.email}
                onChange={(event) =>
                  setData({ email: event.target.value, status: "initial" })
                }
                error={data.status === "failure"}
                endDecorator={
                  <Button
                    variant="solid"
                    color="primary"
                    loading={data.status === "loading"}
                    type="submit"
                    sx={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
                  >
                    Subscribe
                  </Button>
                }
              />
              {data.status === "failure" && (
                <FormHelperText
                  sx={(theme) => ({ color: theme.vars.palette.danger[400] })}
                >
                  Oops! something went wrong, please try again later.
                </FormHelperText>
              )}

              {data.status === "sent" && (
                <FormHelperText
                  sx={(theme) => ({ color: theme.vars.palette.primary[400] })}
                >
                  You are all set!
                </FormHelperText>
              )}
            </FormControl>
          </form>
          <hr></hr>
          <br />

          <div className="categories">
            <div>
              <h3>About</h3>
              <a href="#">About Ark Royal</a>
              <br></br>
              <a href="#">What We Do</a>
              <br></br>
              <a href="#">Mission & Vision</a>
              <br></br>
            </div>
            <div>
              <h3>Explore</h3>
              <a href="#">Upcoming Events</a>
              <br></br>
              <a href="#section_people">The People</a>
              <br></br>
              <a href="#">Past Projects</a>
              <br></br>
            </div>
            <div>
              <h3>Quick Link</h3>
              <a href="#">Join Us</a>
              <br></br>
              <a href="#">Partner With Us</a>
              <br></br>
              <a href="#">Blogs</a>
              <br></br>
            </div>
          </div>
        </div>
      </div>

      <br />
      <div className="rightsReserved">
        <p>All Rights Reserved &copy; Ark Royal Inc</p>
        <small>
          Designed and Built by
          <a href="https://promise-okechukwu.vercel.app/"> Promzzy Koncepts</a>
        </small>
      </div>
    </div>
  );
};

export default Footer;
