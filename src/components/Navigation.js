import { AppBar, Button, Toolbar, Typography, withStyles } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  flex: {
    flex: 1,
  },
};

const Navigation = ({ classes }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" color="inherit">
        Data Quality Solutions
      </Typography>
      {/**
       * This maps the Text to the URI
       */
      }
      <Button color="inherit" component={Link} to="/">Home</Button>
      <Button color="inherit" component={Link} to="/profiling">Profiling</Button>
      <Button color="inherit" component={Link} to="/media">Media Capture</Button>
      <Button color="inherit" component={Link} to="/rules">Rule Engine</Button>
      <div className={classes.flex} />
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(Navigation);
