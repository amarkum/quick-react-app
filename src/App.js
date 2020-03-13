import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import { CssBaseline, withStyles, } from '@material-ui/core';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import DataProfiling from './pages/DataProfiling';
import RuleEngine from './pages/RuleEngine';
import CoRelation from './pages/CoRelation';

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
      <Route exact path="/profiling" component={DataProfiling} />
      <Route exact path="/rule" component={RuleEngine} />
      <Route exact path="/corelation" component={CoRelation} />
    </main>
  </Fragment>
);
export default withStyles(styles)(App);
