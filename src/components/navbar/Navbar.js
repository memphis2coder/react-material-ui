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
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

// css styles
const useStyles = makeStyles({
    menuSliderContainer : {
        width: '50%',
        background: "orange",
        height: "100vh"
    },
    listItemText : {
        color: "white",
        fontWeight: "800"
    },
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
    const [state, setState] = useState({
        left: false
    });

    // toggleDrawer
    const toggleDrawer = (anchor, open) => (event) => {
        // setState
        setState({...state, [anchor]: open})
    };
    
    // function for side drawer
    const menuList = (anchor) => (
        <Box className={classes.menuSliderContainer}>
            <Typography variant="h5" style={{color: "white"}}>menu slider</Typography>
                <List>
                    {menuItems.map((menuItem) => (
                        <ListItem button key={menuItem.id}>
                            <ListItemText primary={menuItem.listText} className={classes.listItemText}/>
                        </ListItem>
                    ))}
                </List>
        </Box>
    )
    //////////////////////////////////////// JSX //////////////////////////////////////////////////////////////////
    return (
        <div>
            <Box>
                <AppBar position="static" style={{background: "none", boxShadow: "none"}}>
                    <Toolbar>
                        <Grid container direction="row" alignItems="center" justify="space-between">
                            <Typography variant="h5" style={{color: "orange"}}>logo</Typography>
                                <IconButton onClick={toggleDrawer(anchor, true)}>
                                    <MenuIcon style={{color: "orange", fontSize: "25px"}}></MenuIcon>
                                </IconButton>
                            
                        </Grid>
                            {/* Drawer slide menu action */}
                            <Drawer open={state[anchor]} anchor={anchor}>
                                {/* bring in menuList */}
                                {menuList(anchor)}
                            </Drawer>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}

export default Navbar
