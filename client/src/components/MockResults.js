import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import { Link } from 'react-router-dom'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Button from '@material-ui/core/Button'
import Fab from '@material-ui/core/Fab';
import mic from '../assets/images/mic_white_48x48.png'
import { useSpring, animated } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support
import PropTypes from 'prop-types';


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      paper: {
        backgroundColor: theme.palette.background.paper,
        // border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
      mic: {
        height: '30px'
      }
}));

const Fade = React.forwardRef(function Fade(props, ref) {
    const { in: open, children, onEnter, onExited, ...other } = props;
    const style = useSpring({
      from: { opacity: 0 },
      to: { opacity: open ? 1 : 0 },
      onStart: () => {
        if (open && onEnter) {
          onEnter();
        }
      },
      onRest: () => {
        if (!open && onExited) {
          onExited();
        }
      },
    });
  
    return (
      <animated.div ref={ref} style={style} {...other}>
        {children}
      </animated.div>
    );
  });
  
  Fade.propTypes = {
    children: PropTypes.element,
    in: PropTypes.bool.isRequired,
    onEnter: PropTypes.func,
    onExited: PropTypes.func,
  };

export default function MockResultsList() {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false)
    const [openModal, setOpenModal] = React.useState(false);

  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <>
            <List className={classes.root}>
                <ListItem alignItems="flex-start" button onClick={handleClick}>
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Principal FE Engineer"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    className={classes.inline}
                                    color="textPrimary"
                                >
                                    Ali Connors
              </Typography>
                                {" — I love to use react for my APPs!…"}
                            </React.Fragment>
                        }
                    />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>

                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>

                <Button onClick={handleOpen} style={{ margin: '20px 20px' }} variant="contained" color="primary">Get in Touch</Button>

              <Modal
                aria-labelledby="spring-modal-title"
                aria-describedby="spring-modal-description"
                className={classes.modal}
                open={openModal}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={openModal}>
                  <div className={classes.paper}>
                    <h4 id="spring-modal-title">Tell us more about your self</h4>
                    <p id="spring-modal-description"> - Tell us how you would like to contacted</p>
                    <p style={{ textAlign: 'center' }}>
                      <Fab color="secondary" aria-label="add">
                        <img src={mic} style={{ height: '30px' }} />
                      </Fab>
                      <p style={{ marginTop: '10px' }} className='small-text'>Press to Record</p>
                    </p>
                  </div>
                </Fade>
              </Modal>
                            </ListItemIcon>

                        </ListItem>
                    </List>
                </Collapse>

                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Senior Mobile Engineer"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    className={classes.inline}
                                    color="textPrimary"
                                >
                                    to Scott, Alex, Jennifer
              </Typography>
                                {" — Working hard is my personal motto…"}
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Senior UI Engineer"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    className={classes.inline}
                                    color="textPrimary"
                                >
                                    Sandra Adams
              </Typography>
                                {' — I am ready to rock it out!…'}
                            </React.Fragment>
                        }
                    />
                </ListItem>
            </List>
        </>
    );
}
