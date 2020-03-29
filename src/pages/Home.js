import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import React, { Component } from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';

class Home extends Component {
  render() {
    return (
      <div>
        <br /><br /><br />
        <Typography
          float="left"
          style={{ font: "50 70px/79px Roboto,sans-serif" }}
          variant="h1">React App Utility for<br /> your daily needs.</Typography>
        <br />
        <Typography style={{ font: "100 22px/20px Roboto,sans-serif" }} >
          Ever wondered in office, and thought what if you could have a tool which solves your daily problem?
      </Typography><br />
        <Button
          href="https://github.com/amarkum/react-utility"
          style={{ backgroundColor: '#000000', color: 'white', width: "10%" }}>
          GitHub &nbsp;<GitHubIcon />
        </Button>
        <br /> <br />
        <Typography style={{ font: "100 20px/29px Roboto,sans-serif" }} >
          We have all faced a situation, where we need to do some quick look-up's. Do some basic checks, convert some files, perform a look up etc.<br />
        But worry not, with this react-app utility, you can perform some reduntant task quickly, process some files and keep it going.
      <br />If you want to add up any feature, send a Pull Request to the GitHub Repository.
      </Typography>
      </div>
    )
  }
}
export default Home;