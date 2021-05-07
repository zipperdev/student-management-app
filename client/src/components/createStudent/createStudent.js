import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
        margin: theme.spacing(1),
        width: "25ch"
        }
    }
}));

export default function CreateStudent() {
    const classes = useStyles();
    const [ student, setStudent ] = useState({
        regNo: 0, 
        studentName: "", 
        grade: "", 
        section: ""
    });
    const createStudent = () => {
        axios.post("http://localhost:5000/students", student)
            .then(() => {
                window.location.reload(false);
            });
    };
    return (
        <>
            <h2>Create Student</h2>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Registeration No." variant="outlined" value={student.regNo} required onChange={(e) => {
                    setStudent({ ...student, regNo: e.target.value });
                }} />
                <TextField id="outlined-basic" label="Name" variant="outlined" value={student.studentName} required onChange={(e) => {
                    setStudent({ ...student, studentName: e.target.value });
                }} />
                <TextField id="outlined-basic" label="Grade" variant="outlined" value={student.grade} required onChange={(e) => {
                    setStudent({ ...student, grade: e.target.value });
                }} />
                <TextField id="outlined-basic" label="Section" variant="outlined" value={student.section} onChange={(e) => {
                    setStudent({ ...student, section: e.target.value });
                }} />
                <Button variant="contained" color="primary" onClick={createStudent}>
                    Create
                </Button>
            </form>
        </>
    );
};