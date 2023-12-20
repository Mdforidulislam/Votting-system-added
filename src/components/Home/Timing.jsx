import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import logo from '../../assets/images/logo.png'
const Timing = () => {
      // Timeline
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(intervalId);
  }, []);

  // Greeting
  const [greeting, setGreeting] = useState(""); // Initialize with an empty greeting

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();

      const currentHour = now.getHours();

      if (currentHour >= 5 && currentHour < 12) {
        setGreeting("Good Morning");
      } else if (currentHour >= 12 && currentHour < 15) {
        setGreeting("Good Noon");
      } else if (currentHour >= 15 && currentHour < 17) {
        setGreeting("Good Afternoon");
      } else if (currentHour >= 17 && currentHour < 19) {
        setGreeting("Good Evening");
      } else {
        setGreeting("Good night");
      }
    }, 1000); // Update every second

    return () => clearInterval(intervalId);
  }, []);
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 rounded-2xl">
            <Box className='block md:flex gap-5 justify-between items-center'>
              <Stack
                sx={{
                  backgroundColor: "#394867",
                  boxShadow: "0px 0px 2px 2.5px #394867",
                  padding: "20px",
                }}
              >
                <Typography>
                  <p
                    style={{
                      fontSize: 50,
                      fontFamily: "monospace",
                      color: "#fef7df",
                    }}
                  >
                    {currentDateTime.toLocaleTimeString()}
                  </p>
                </Typography>
                <Typography>
                  <p
                    style={{
                      fontSize: 50,
                      fontFamily: "monospace",
                      color: "#fef7df",
                    }}
                  >
                    {greeting}
                  </p>
                </Typography>
              </Stack>
            </Box>
            <Box>
              <Stack direction={"row "} justifyContent={"end"}>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 0.6, loop: Infinity }}
                >
                  <img src={logo} alt="logo" />
                </motion.div>
              </Stack>
            </Box>
        </div>
    );
};

export default Timing;