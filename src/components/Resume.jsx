import React from 'react';
import {
  Grid,
  Typography,
  Paper,
  Avatar,
  Divider,
  Box,
  List,
  ListItem,
  ListItemText,
  LinearProgress,
  Button
} from '@mui/material';
import MyPic from '../assets/mohamedsonbol.png';

const technologies = [
  'JavaScript',
  'Python',
  'ReactJS',
  'MongoDB',
  'NodeJS',
  'ExpressJS',
  'WordPress',
  'Shopify',
  'Git/GitHub',
  'Bash',
  'REST API',
  'Google Tag Manager/Analytics',
  'Adobe Launch/Analytics'
];

const skills = [
  { skill: 'Projects Management', progress: 100 },
  { skill: 'Critical thinking', progress: 90 },
  { skill: 'Communications EN', progress: 90 },
  { skill: 'Pressure handling', progress: 90 },
  { skill: 'Technical solutions', progress: 90 },
  { skill: 'Researching', progress: 90 },
  { skill: 'Debugging', progress: 90 },
];

const experiences = [
  {
    startYear: 2024,
    endYear: 'Present',
    location: 'Warsaw, Poland.',
    jobName: 'Samsung SDS',
    jobPosition: 'Technical Project Manager',
    jobDescription: `My role involves collaborating with cross-functional teams, facilitating and overseeing first-party and third-party tag implementations using Adobe and Google Tag Manager (GTM) for both client-side and server-side environments.
    I ensure the seamless deployment of analytics frameworks, optimizing data accuracy and reliability to drive strategic decision-making. By aligning technical requirements with business goals, 
    I help deliver actionable insights that empower teams to achieve their KPIs and improve overall performance.`,
  },
  {
    startYear: 2021,
    endYear: '2024',
    location: 'Warsaw, Poland.',
    jobName: 'Accenture',
    jobPosition: 'Technical Support Specialist',
    jobDescription: `Providing professional customer service for clients with technical requirements.
    Debugging websites, analyzing and providing code (JavaScript)
    Providing guidance on implementing server-to-server integration (API/JSON/JavaScript)
    Working with my team on developing Google Chrome extensions
    Created an automated Google Sheet App using Google App Scripts (JavaScript)
    Communicating and working with team members on daily bases.`,
  },

  // Add other experiences here...
];

const education = [
  {
    startYear: 2010,
    endYear: 2013,
    location: 'Sharjah, United Arab Emirates.',
    schoolName: 'Al Shola Private School',
    schoolDescription: 'Successfully graduated with 85% score.',
  },
  // Add other education details here...
];

const Resume = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Paper sx={{ p: 3 }}>
        <Grid container spacing={3}>
          {/* Left Section: Image */}
          <Grid item xs={12} md={3} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Avatar
              alt="Mohamed Sonbol"
              src={MyPic}
              sx={{ width: 300, height: 300 }}
            />
          </Grid>

          {/* Right Section: Title and Description */}
          <Grid item xs={12} md={9}>
            <Typography variant="h4" sx={{ textAlign: 'left' }}>Mohamed Sonbol</Typography>
            <Typography variant="h6" color="textSecondary" sx={{ textAlign: 'left', mb: 2 }}>
              Technical Web Projects Specialist
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="h5" sx={{ textAlign: 'left', mb:1}}>Technologies</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap'}}>
              {technologies.map((tech, index) => (
                <Button
                  key={index}
                  variant="outlined"
                  sx={{
                    textTransform: 'none',
                    borderRadius: '20px',
                    px: 3,
                    m: .2,
                  }}
                >
                  {tech}
                </Button>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* Skills Section */}
        <Divider sx={{ my: 4 }} />
        <Typography variant="h5" sx={{ textAlign: 'left', mb:1}}>Skills</Typography>
        <List>
          {skills.map((skill, index) => (
            <ListItem key={index} sx={{ textAlign: 'left',display: 'flex' }}>
              <ListItemText primary={skill.skill} />
              <Box sx={{ width: {xs:'50%', sm: '70%',},  mx: 1 }}>
                <LinearProgress variant="determinate" value={skill.progress} />
              </Box>
              <Typography variant="body2" color="textSecondary">{`${skill.progress}%`}</Typography>
            </ListItem>
          ))}
        </List>

        {/* Experience Section */}
        <Divider sx={{ my: 4 }} />
        <Typography variant="h5" sx={{ textAlign: 'left', mb:1}}>Experience</Typography>
        {experiences.map((exp, index) => (
          <Box key={index} sx={{ mb: 2 }}>
            <Typography variant="h6" sx={{ textAlign: 'left' }}>{exp.jobName}</Typography>
            <Typography variant="subtitle1" color="textSecondary" sx={{ textAlign: 'left' }}>
              {exp.startYear} - {exp.endYear} ({exp.location})
            </Typography>
            <Typography variant="subtitle2" sx={{ textAlign: 'left' }}>{exp.jobPosition}</Typography>
            <Typography variant="body2" color="textSecondary" sx={{ textAlign: 'left' }}>{exp.jobDescription}</Typography>
            <Divider sx={{ my: 1 }} />
          </Box>
        ))}

        {/* Education Section */}
        <Typography variant="h5" sx={{ textAlign: 'left', mb:1}}>Education</Typography>
        {education.map((edu, index) => (
          <Box key={index} sx={{ mb: 2 }}>
            <Typography variant="h6" sx={{ textAlign: 'left' }}>{edu.schoolName}</Typography>
            <Typography variant="subtitle1" sx={{ textAlign: 'left' }}>
              {edu.startYear} - {edu.endYear} ({edu.location})
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{ textAlign: 'left' }}>{edu.schoolDescription}</Typography>
            <Divider sx={{ my: 1 }} />
          </Box>
        ))}
      </Paper>
    </Box>
  );
};

export default Resume;
