import React from "react";
import {Button, Container, TextField} from "@mui/material";

export const Address =({formData,setForm, navigation})=>{
const {address,city,county,zip} = formData;
    return (
       <Container maxWidth='xs'>
           <h3>Address</h3>
           <TextField
               label="Address"
               name = "address"
               value={address}
               onChange={setForm}
               margin="normal"
               variant="outlined"
               autoComplete="off"
               fullWidth
           />
           <TextField
               label="City"
               name = "city"
               value={city}
               onChange={setForm}
               margin="normal"
               variant="outlined"
               autoComplete="off"
               fullWidth
           />
           <TextField
               label="County"
               name = "county"
               value={county}
               onChange={setForm}
               margin="normal"
               variant="outlined"
               autoComplete="off"
               fullWidth
           />
           <TextField
               label="Zip"
               name = "zip"
               value={zip}
               onChange={setForm}
               margin="normal"
               variant="outlined"
               autoComplete="off"
               fullWidth
           />
              <div style={{marginTop:'1rem'}}>
                  <Button
                      color="secondary"
                      variant="contained"
                      style={{marginRight:'1rem'}}
                      onClick={()=>navigation.previous()}
                  >
                      Back
                  </Button>
                  <Button
                      color="primary"
                      variant="contained"
                      onClick={()=> navigation.next()}
                  >
                      Next
                  </Button>
              </div>


       </Container>
    )
}