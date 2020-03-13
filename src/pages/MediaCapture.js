import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Papa from 'papaparse';
import React, { Component, Fragment } from 'react';

class MediaCapture extends Component {

    state = {
        text: null,
        csvRows: []
    };

    // Render Component
    render() {

        // declare a new fileReader
        let fileReader;

        //helper method which will set state the csv content to the state
        const handleFileRead = (e) => {
            const content = fileReader.result;

            const results = Papa.parse(content, { header: true }) // object with { data, errors, meta }
            const rows = results.data // array of objects

            console.log(rows);
            this.setState({
                csvRows: rows
            });
        }

        // a method which accepts file and sets the state.text to CSV content
        const handleFileChosen = (file) => {
            fileReader = new FileReader();
            //this will wait until load has ended.
            fileReader.onloadend = handleFileRead
            //read the file as text
            fileReader.readAsText(file);
        }

        return (
            <Fragment>
                <div>
                    <br /> <br />
                    <Typography variant="h7"> Upload a File&nbsp;&nbsp;</Typography>
                    <input style={{ display: 'none' }}
                        accept=".csv,.xlsx"
                        id="contained-button-file"
                        type="file"
                        onChange={e => handleFileChosen(e.target.files[0])}
                    />
                    <label htmlFor="contained-button-file">
                        <Button variant="contained" color="primary" component="span">Upload</Button>
                    </label>
                </div>
                <h5>{this.state.text}</h5>

                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Name</TableCell>
                                <TableCell align="right">Age&nbsp;</TableCell>
                                <TableCell align="right">Place&nbsp;</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.csvRows.map(row => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.age}</TableCell>
                                    <TableCell align="right">{row.place}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Fragment>
        );
    }
}

export default (MediaCapture);