import React from "react";
import {Button, Container, TextField} from "@mui/material";

export const Names = ({formData,setForm, navigation})=>{
    const {firstName, lastName, nickName} = formData;
    console.log(navigation);
    return(
        <Container maxWidth="xs">
            <h3>Names</h3>
           <TextField
                label="First Name"
                name = "firstName"
                value={firstName}
                onChange={setForm}
                margin="normal"
                 variant="outlined"
                autoComplete="off"
                fullWidth
           />
            <TextField
                label="Last Name"
                name = "lastName"
                value={lastName}
                onChange={setForm}
                margin="normal"
                variant="outlined"
                autoComplete="off"
                fullWidth
            />
            <TextField
                label="Nick Name"
                name = "nickName"
                value={nickName}
                onChange={setForm}
                margin="normal"
                variant="outlined"
                autoComplete="off"
                fullWidth
            />
            <Button
                variant="contained"
                fullWidth color= "primary"
                style={{marginTop:'1rem'}}
                onClick={()=> navigation.next()}
            >Next</Button>
        </Container>
    )
}