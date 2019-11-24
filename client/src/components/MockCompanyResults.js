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
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function MockCompanyResults() {
  const [open, setOpen] = React.useState(false)

  const handleClick = () => {
    setOpen(!open);
  };

  const showMoreInfo = () => {
    // debugger
  }

  const classes = useStyles();

  return (
    <List className={classes.root} onClick={showMoreInfo}>


      <ListItem alignItems="flex-start" button onClick={handleClick}>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://cldup.com/1BbqC5a2Pk-3000x3000.png" />
        </ListItemAvatar>
        <ListItemText
          primary="Prodigious"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Prodigious
              </Typography>
              {" — I love to use react for my APPs!…"}
            </React.Fragment>
          }
        />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemText style={{width: '80%', margin: '0 auto'}}
                primary="Prodigious"
                secondary="We are looking for someone who can build amazing Web Apps using React. We'd love 5 years experience"
          />
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              
              <Button style={{ margin: '20px 20px' }} variant="contained" color="primary">Get in Touch
                </Button>
                
            </ListItemIcon>
          </ListItem>
        </List>
      </Collapse>

      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="IBM"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                IBM
              </Typography>
              {" — We work with the best people…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://cldup.com/az8Spx2JaT-3000x3000.png" />
        </ListItemAvatar>
        <ListItemText
          primary="Amazon"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Amazon
              </Typography>
              {' — Make your next step!…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
