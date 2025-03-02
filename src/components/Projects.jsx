import React, { Component } from 'react';
import { Tabs, Tab, Grid, Card, CardContent, CardMedia, CardActions, Button, Typography, Box, Paper } from '@mui/material';
import Portfolio from '../assets/portfolio.png';
import BlogApp from '../assets/blogapp2.png';
import Bootstrap4 from '../assets/bootstrap4.png';
import Landing from '../assets/landingpage.png';
import Survey from '../assets/Surveyform.png';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    const projects = [
      {
        image: Portfolio,
        title: 'React Portfolio',
        description: 'This website was developed with React library, check my code on Github!',
        github: 'https://github.com/mohamedsonbol/portfolio'
      },
      {
        image: Bootstrap4,
        title: 'Bootstrap Grids',
        description: 'Demonstrating my Bootstrap4 Skills using columns and rows.',
        codepen: 'https://codepen.io/mowhocodes/pen/eyyaeV'
      },
      {
        image: Landing,
        title: 'Landing Page',
        description: 'A FCC Project Designed with HTML5 / CSS3 / Flex.',
        codepen: 'https://codepen.io/mowhocodes/pen/QWELjqb'
      },
      {
        image: Survey,
        title: 'Survey Form',
        description: 'A FCC Project Designed with HTML5 / CSS3 / Flex.',
        codepen: 'https://codepen.io/mowhocodes/pen/mdPYZGe'
      },
      {
        image: BlogApp,
        title: 'BlogApp',
        description: 'BlogApp developed with node.js, express.js, mongoDB Atlas and Bootstrap4.',
        github: 'https://github.com/mohamedsonbol/BlogApp',
        liveDemo: 'https://secret-ridge-37795.herokuapp.com/blogs'
      }
    ];

    const categoryProjects = this.state.activeTab === 0
      ? projects.slice(0, 4)
      : projects.slice(4, 5); // Adjust this based on which projects belong to which tab

    return (
      <Box display="flex" flexWrap="wrap" gap={2}>
        {categoryProjects.map((project, index) => (
          <Paper key={index} elevation={3} style={{ maxWidth: 330 }}>
            <Card>
              <CardMedia
                component="img"
                alt={project.title}
                height="140"
                image={project.image}
                style={{ objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions>
                {project.github && (
                  <Button size="small" href={project.github} target="_blank" rel="noopener noreferrer">
                    Github
                  </Button>
                )}
                {project.codepen && (
                  <Button size="small" href={project.codepen} target="_blank" rel="noopener noreferrer">
                    Codepen
                  </Button>
                )}
                {project.liveDemo && (
                  <Button size="small" href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </Button>
                )}
              </CardActions>
            </Card>
          </Paper>
        ))}
      </Box>
    );
  }

  render() {
    return (
      <Box padding={3}>
        <Tabs
          value={this.state.activeTab}
          onChange={(event, newValue) => this.setState({ activeTab: newValue })}
          textColor="primary"
          indicatorColor="primary"
          style={{ marginBottom:'10px' }}
        >
          <Tab label="Front-end" />
          <Tab label="Full-stack" />
        </Tabs>
        <section>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {this.toggleCategories()}
            </Grid>
          </Grid>
        </section>
      </Box>
    );
  }
}

export default Projects;
