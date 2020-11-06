import { Typography } from '@material-ui/core';
import React from 'react';
import {Grid, Box} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

function Header() {
    const useStyles = makeStyles({
        title: {
            color: "blue"
        },
    });




    const classes = useStyles();
    return (
        
        <div>
            <Box>
                <Grid>
                    <Typography className={classes.title} variant="h4">this is the header</Typography>
                </Grid>
            </Box>
            
        </div>
    )
}

export default Header
