import { Typography } from '@material-ui/core';
import React from 'react';
import {Grid, Box, Container} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

function Header() {
    const useStyles = makeStyles({
        flex: {
            flexGrow: 1,
        },
        header: {
            height: "100%"
        },
        title: {
            color: "blue"
        },
        left : {
            display: 'flex',
            alignItems: "center",
            justifyContent: "center",
            height: "500px",
        },
        right: {
            backgroundColor: "#5E77A9",
            height: "500px",
        }

    });




    const classes = useStyles();
    return (
        <Container>
            <div className={classes.flex}>
                <div className={classes.header}>
                    <Grid container>
                            <Grid item xs={12} sm={6}>
                                <Box>
                                <div className={classes.left}>
                                    <Typography className={classes.title} variant="h4">this is the header</Typography>
                                </div>
                                </Box>
                                
                                
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <div className={classes.right}>
                                    <Typography className={classes.title} variant="h5">image</Typography>
                                </div>
                                
                            </Grid>
                    </Grid>
                </div>
            </div>
        </Container>
        
    )
}

export default Header
