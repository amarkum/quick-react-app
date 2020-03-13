import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import { CssBaseline, withStyles, } from '@material-ui/core';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Profiling from './pages/Profiling';
import MediaCapture from './pages/MediaCapture';
import RuleEngine from './pages/RuleEngine';

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
      <Route exact path="/profiling" component={Profiling} />
      <Route exact path="/media" component={MediaCapture} />
      <Route exact path="/rules" component={RuleEngine} />
    </main>
  </Fragment>
);
export default withStyles(styles)(App);
