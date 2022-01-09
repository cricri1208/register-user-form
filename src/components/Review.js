import React from "react";
import {Accordion, AccordionDetails, Button, Container, IconButton, ListItemText} from "@mui/material";
import {AccordionSummary} from "@mui/material";
import {Edit, ExpandMore} from "@mui/icons-material";

export const Review =({formData,navigation})=>{

    const {go} =navigation;
    const {
        firstName ,
        lastName ,
        nickName ,
        address ,
        city ,
        county,
        zip,
        phone,
        email,
    }= formData
    return (
        <Container maxWidth='sm'>
            <h3>Review</h3>
            <RenderAccordion summary="Names" go={go} details={[
                    {'First Name': firstName},
                    {'Last Name': lastName},
                    {'Nick Name': nickName},
                ]}
            />
            <RenderAccordion summary="Address" go={go} details={[
                    {'Address': address},
                    {'City': city},
                    {'County': county},
                    {'Zip': zip},
                ]}
            />
            <RenderAccordion summary="Contact" go={go} details={[
                    {'Phone': phone},
                    {'Email': email},
                ]}
            />
            <Button
            color="primary"
            variant="contained"
            style={{marginTop:'1.5rem'}}
            onClick={() =>go('submit')}
            >Submit</Button>

        </Container>
    )
}

export const RenderAccordion = ({summary,details,go})=>(
    <Accordion>
        <AccordionSummary
        expandIcon={<ExpandMore/>}
        >{summary}</AccordionSummary>
        <AccordionDetails>
            <div>
                {details.map((data, index) =>{
                    const objKey = Object.keys(data)[0];
                    const objValue = data[Object.keys(data)[0]];

                    return <ListItemText key={index}>{`${objKey}: ${objValue}`}</ListItemText>
                })}
                <IconButton
                    color="primary"
                    component="span"
                    onClick={() => go(`${summary.toLowerCase()}`)}
                ><Edit/></IconButton>
            </div>
        </AccordionDetails>
    </Accordion>
)
