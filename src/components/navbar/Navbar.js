import React, {useState} from 'react';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Container from '@material-ui/core/Container';

// css styles
const useStyles = makeStyles({
    menuSliderContainer : {
        background: "orange",
        height: "100vh",
        width: '100vw',
        paddingTop: "200px"
    },
    listItemText : {
        color: "white",
        textAlign: "center",
        fontSize: "20rem",
    },
    clearButton : {
        position: 'absolute',
        top: "0",
        right : "17px",
        marginTop: "10px",
        color: "white",
    }
});

// menuItem links
const menuItems = [
    {
        id: 1,
        listText: "Home"
    },
    {
        id: 2,
        listText: "Portfolio"
    },
    {
        id: 3,
        listText: "Contact"
    }
]

function Navbar() {
    // css styles
    const classes = useStyles();
    // state
    const [state, setState] = useState({left: false});

    // toggleSlider method
    const toggleSlider = (slider, open) => () => {
        // setState
        setState({...state, [slider]: open})
        console.log("clicked")
    };
    
    // function for side drawer
    const sideList = (slider) => (
        <Box className={classes.menuSliderContainer} onClick={toggleSlider(slider, false)}>
            <Button className={classes.clearButton}>
                <ClearIcon style={{fontSize: "30px"}}/>
            </Button>
                <List>
                    {menuItems.map((menuItem) => (
                        <ListItem button key={menuItem.id}>
                            <ListItemText primary={menuItem.listText} className={classes.listItemText}/>
                        </ListItem>
                    ))}
                </List>
        </Box>
    );

    //////////////////////////////////////// JSX //////////////////////////////////////////////////////////////////
    return (
        <div>
            <Container>
                <Box>
                    <AppBar position="static" style={{background: "none", boxShadow: "none"}}>
                        <Toolbar>
                            <Grid container direction="row" alignItems="center" justify="space-between">
                                <Typography variant="h4" style={{color: "orange"}}>logo</Typography>
                                    <IconButton onClick={toggleSlider('left',true)}>
                                        <MenuIcon style={{color: "orange", fontSize: "30px"}} />
                                    </IconButton>
                            </Grid>
                                {/* Drawer slide menu action */}
                                <Drawer 
                                    open={state.left} 
                                    anchor="left"
                                    onClose={toggleSlider("left",false)}>
                                    {/* bring in menuList */}
                                    {sideList("left")}
                                </Drawer>
                        </Toolbar>
                    </AppBar>
                </Box>
            </Container>
        </div>
    )
}

export default Navbar
