import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import banner from "../assets/images/banner.jpg";
import ShareContent from "../components/ShareContent";

import Marquee from "react-fast-marquee";
import ControlledAccordions from "../components/Home/Accordion";
import TeamMember from "../components/Home/TeamMember";
import Presentation from "../components/Home/Presentation";
import VideoSection from "../components/Home/VideoSection";
import Timing from "../components/Home/Timing";

const Home = () => {
    const [techonology, setTechno] = useState([]);

  useEffect(() => {
    fetch("/Technologoy.json")
      .then((res) => res.json())
      .then((data) => setTechno(data));
  }, []);

  return (
    <Stack sx={{ backgroundColor: "#010b2e", width: "100%", height: "100%" }}>
      <Stack>
        {/* Bannner  */}
        <Stack direction={"row"} justifyContent={"center"}>
          <Box
            sx={{
              backgroundImage: `url(${banner})`,
              width: "100%",
              height: "100vh",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></Box>
        </Stack>
      </Stack>
      <ShareContent>
        <Stack>
          <Box>
            <Presentation></Presentation>
          </Box>
        </Stack>
        <Stack
          sx={{ backgroundColor: "#010b2e", width: "100%", height: "100%" }}
        >
          {/* Timimg section */}
          <Stack
            direction={"row"}
            spacing={2}
            p={2}
            justifyContent={"space-between"}
            alignItems={"center"}
            sx={{maxWidth:'max-content'}}
          >
            <Timing></Timing>
          </Stack>
        </Stack>
        <Stack>
          <VideoSection></VideoSection>
        </Stack>
        <Stack sx={{paddingTop:'100px'}}>
          {/* Slider of client Reviewe */}
          <Box>
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-[#ffffff] sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                    <defs>
                      <pattern
                        id="1d4040f3-9f3e-4ac7-b117-7d4009658ced"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#1d4040f3-9f3e-4ac7-b117-7d4009658ced)"
                      width="52"
                      height="24"
                    />
                  </svg>
                </span>{" "}
                INCLUDE LANGUAGE AND TECHGNOLOGY 
              </h2>
              <p className="text-base text-white md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque rem aperiam, eaque ipsa quae.
              </p>
            </div>
            <Marquee
              direction="right"
              spacing={3}
              sx={{ animationDuration: "5s" }}
            >
              {techonology.map((item, index) => (
                <Grid item key={index}>
                  <img
                    src={item.icons}
                    alt={`icon-${index}`}
                    style={{
                      marginRight: "8px",
                      width: "300px",
                      height: "300px",
                      backgroundColor: "#394867",
                      padding: "10px",
                    }} // Adjust the spacing here
                  />
                </Grid>
              ))}
            </Marquee>
          </Box>
        </Stack>
        <Stack>
          {/* Team Section */}
          <Stack>
            <Box className="max-w-screen-2xl mx-auto">
              <TeamMember />
            </Box>
          </Stack>
        </Stack>
        <Stack sx={{marginBottom:'50px'}}>
          {/* According section  */}
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-[#ffffff] sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                    <defs>
                      <pattern
                        id="1d4040f3-9f3e-4ac7-b117-7d4009658ced"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#1d4040f3-9f3e-4ac7-b117-7d4009658ced)"
                      width="52"
                      height="24"
                    />
                  </svg>
                </span>{" "}
                All the question You can find out 
              </h2>
              <p className="text-base text-white md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque rem aperiam, eaque ipsa quae.
              </p>
            </div>
          <Box className="max-w-screen-2xl mx-auto">
            <ControlledAccordions
              style={{
                backgroundColor: "#394867",
                width: "100%",
                height: "100%",
              }}
            ></ControlledAccordions>
          </Box>
        </Stack>
      </ShareContent>
    </Stack>
  );
};

export default Home;
