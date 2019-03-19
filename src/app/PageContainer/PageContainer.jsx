import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, CssBaseline } from "@material-ui/core";
import {
  Home as HomeIcon,
  Menu as MenuIcon,
  Search as SearchIcon,
  ChevronRight as ChevronRightIcon,
  ChevronLeft as ChevronLeftIcon,
  SupervisorAccount as CharacterIcon,
  Theaters as ChapterIcon
} from '@material-ui/icons'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

import LandingPage from '../pages/landingPage/LandingPage'
import Root from '../Root'
import logo from '../assets/img/logo.png'
import { Text } from "grommet";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
    backgroundColor: 'rgb(25,26,29)'
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: 'rgb(42,55,122)'
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: 'rgb(23,24,28)'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  MuiTypography: {
    ListItemSidebar: {
      color: 'rgba(232, 231, 227, 0.87)'
    }
  },
  DividerBar: {
    backgroundColor: 'rgba(38, 36, 31, 0.87)'
  }
});

class PersistentDrawerLeft extends Component {
  state = {
    open: false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, theme } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Link to=''>
            <img alt='Logo' src={logo} style={{ maxHeight: '6vh' }} />
            </Link>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon style={{ color: 'rgba(232, 231, 227, 0.54)'}}/> : <ChevronRightIcon style={{ color: 'rgba(232, 231, 227, 0.54)'}} />}
            </IconButton>
          </div>
          <List>
            <Divider className={classes.DividerBar}/>
            <Link to='' style={{ textDecoration: 'none' }} onClick={this.handleDrawerClose}>
              <ListItem button key='home'>
                <ListItemIcon><HomeIcon style={{ color: 'rgba(232, 231, 227, 0.54)'}} /></ListItemIcon>
                <ListItemText><Text size='1rem' color='rgba(232, 231, 227, 0.87)'>Inicio</Text></ListItemText>
              </ListItem>
            </Link>
            <Divider className={classes.DividerBar}/>
            <Link to='/search' style={{ textDecoration: 'none' }} onClick={this.handleDrawerClose}>
            <ListItem button key='search'>
              <ListItemIcon><SearchIcon style={{ color: 'rgba(232, 231, 227, 0.54)'}} /></ListItemIcon>
              <ListItemText><Text size='1rem' color='rgba(232, 231, 227, 0.87)'>Buscar</Text></ListItemText>
            </ListItem>
          </Link>
            <Divider className={classes.DividerBar}/>
            <Link to='/characters' style={{ textDecoration: 'none' }} onClick={this.handleDrawerClose}>
              <ListItem button key='characters'>
                <ListItemIcon><CharacterIcon style={{ color: 'rgba(232, 231, 227, 0.54)'}} /></ListItemIcon>
                <ListItemText><Text size='1rem' color='rgba(232, 231, 227, 0.87)'>Personajes</Text></ListItemText>
              </ListItem>
            </Link>
            <Divider className={classes.DividerBar}/>
            <Link to='/chapters' style={{ textDecoration: 'none' }} onClick={this.handleDrawerClose}>
              <ListItem button key='chapters'>
                <ListItemIcon><ChapterIcon style={{ color: 'rgba(232, 231, 227, 0.54)'}} /></ListItemIcon>
                <ListItemText><Text size='1rem' color='rgba(232, 231, 227, 0.87)'>Capitulos</Text></ListItemText>
              </ListItem>
            </Link>
          </List>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <div>
          <Root />
          </div>
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(PersistentDrawerLeft);