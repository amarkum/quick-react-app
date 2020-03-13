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

class DataProfiling extends Component {

    state = {
        keys: [],
        csvRows: [],
        head: {
        }
    }

    // Render Component
    render() {

        // declare a new fileReader
        let fileReader;

        //helper method which will set state the csv content to the state
        const handleFileRead = (e) => {
            const content = fileReader.result;

            const results = Papa.parse(content, { header: true, dynamicTyping: true }) // object with { data, errors, meta }
            const rows = results.data // array of objects
            this.setState({
                csvRows: rows,
                keys: Object.keys(rows[0]),
                datasample: Object.keys(rows[1])
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
                    <br /> 
                    <Typography variant="h5">PROJECTS&nbsp;&nbsp;</Typography>
                    <Button variant="contained" color="primary">CREATE</Button> &nbsp; &nbsp;
                    <Button variant="contained" color="primary">OPEN</Button>
                    <br/>
                    <br/>
                   
                    <hr/>
                    <br/> 
                    
                    <Typography variant="h7">Please Upload a CSV or Excel Workbook&nbsp;&nbsp;</Typography>
                    <input style={{ display: 'none' }}
                        accept=".csv,.xlsx"
                        id="contained-button-file"
                        type="file"
                        onChange={e => handleFileChosen(e.target.files[0])}
                    />
                    <label htmlFor="contained-button-file">
                        <br/><Button variant="contained" color="primary" component="span">Upload</Button>
                    </label>
                    &nbsp;
                    &nbsp;
                    <br/> <br/>

                    <hr/><br/>
                    <Button variant="contained" color="primary">GENERATE REPORT</Button>
                </div>
                <br/>

                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                {
                                    this.state.keys.map(col => (
                                        <TableCell align="left">{col.toUpperCase()}</TableCell>)
                                    )
                                }

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                this.state.csvRows.map(row => (
                                    <TableRow>
                                        {
                                            this.state.keys.map(col => (
                                                <TableCell align="left">{row[col]}</TableCell>))
                                        }
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Fragment>
        );
    }
}
export default (DataProfiling);