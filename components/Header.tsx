import React, { FC } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
//import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
//import SearchIcon from '@material-ui/icons/Search';
import grey from '@material-ui/core/colors/grey';
import HomeIcon from '@material-ui/icons/Home';
import Link from 'next/link';
//import React, { FC } from 'react';
//import Link from 'next/link';
//import GitHubIcon from '@material-ui/icons/GitHub';
//import purple from '@material-ui/core/colors/purple';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faGithub } from '@fortawesome/free-solid-svg-icons';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Header: FC<{}> = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="sticky" style={{color: grey[50], backgroundColor: grey[800]}} >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <Link href='/'><HomeIcon fontSize='default' /></Link>
            
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            ABEMA × NOSUKE
          </Typography>
          {/*<div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
            </div>*/}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default  Header;