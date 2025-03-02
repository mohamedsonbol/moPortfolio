import React from 'react';
import MyPic from '../assets/mohamedsonbol.png';
import { Box, Typography, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Home = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // justifyContent: 'center',
        paddingTop: '3rem',
        height: '100vh',
        textAlign: 'center',
        color: 'white',
        background: 'linear-gradient(to right, #267871, #136a8a);',

      }}>
      <Box
        component="img"
        src={MyPic}
        alt="Profile"
        sx={{
          borderRadius: '50%',
          width: '350px', // Adjust size as needed
        }}
      />
      <Typography
        variant="h1"
        sx={{
          fontSize: '2.5rem',
          fontWeight: 500,
        }}
      >
        Web Developer
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          fontSize: '1.1em',
          maxWidth: {
            xs: '80%',
            sm: '100%'
          },
          padding: '.5em',
          color: '#fff',
          contrastText: '#f3f3f3'
        }}
      >
      Hi! Welcome to my website, I'm a Web Developer, 
      Digital Advetising and Technical Consultant. 
      Spcialized in eCommerce stores developmenet.

      </Typography>
      <Box
        sx={{
          display: 'flex',
          gap: '1rem',
          padding:'.5rem'
        }}
      >
        <IconButton
          component="a"
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: 'white', fontSize: '2.5rem', '&:hover': { color: '#61dafb' } }}
        >
          <LinkedInIcon fontSize="inherit" />
        </IconButton>
        <IconButton
          component="a"
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: 'white', fontSize: '2.5rem', '&:hover': { color: '#61dafb' } }}
        >
          <GitHubIcon fontSize="inherit" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Home;
