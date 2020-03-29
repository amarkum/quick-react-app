import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import { CssBaseline, withStyles, } from '@material-ui/core';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import CsvReader from './pages/CsvReader';

const styles = theme => ({
  main: {
    padding: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2),
    },
  },
});

const App = ({ classes }) => (
  <Fragment>
    <CssBaseline />
    <Navigation />
    <main className={classes.main}>
      { /**
         * this maps the URI with the component
         */
      }
      <Route exact path="/" component={Home} />
      <Route exact path="/viewcsv" component={CsvReader} />
    </main>
  </Fragment>
);
export default withStyles(styles)(App);
