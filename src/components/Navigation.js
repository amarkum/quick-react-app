import { AppBar, Button, Toolbar, Typography, withStyles } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  flex: {
    flex: 1,
  },
};

const Navigation = ({ classes }) => (
  <AppBar position="static" style={{backgroundColor:'#000000', color: 'white',}}>
    <Toolbar>
      <Typography variant="h6" color="inherit">
        react.util
      </Typography>
      {/**
       * This maps the Text to the URI
       */
      }
      <Button color="inherit" component={Link} to="/">Home</Button>
      <Button color="inherit" component={Link} to="/viewcsv">CSV-VIEW</Button>
      <div className={classes.flex} />
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(Navigation);
