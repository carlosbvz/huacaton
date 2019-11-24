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

export default function MockAlikeCompanies() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
      <Checkbox
        value="checkedA"
        inputProps={{
          'aria-label': 'primary checkbox',
        }}
      />
        <ListItemAvatar>
          <Avatar alt="Alexis Villegas" src="https://cldup.com/1BbqC5a2Pk-3000x3000.png" />
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
              {" — We believe in you!…"}
            </React.Fragment>
          }
        />
      </ListItem>
      
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
      <Checkbox
        value="checkedA"
        inputProps={{
          'aria-label': 'primary checkbox',
        }}
      />
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://cldup.com/8p9-qAq9Vs-3000x3000.png" />
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
      <Checkbox
        value="checkedA"
        inputProps={{
          'aria-label': 'primary checkbox',
        }}
      />
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
