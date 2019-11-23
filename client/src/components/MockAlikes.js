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

export default function MockAlikesList() {
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
          <Avatar alt="Alexis Villegas" src="https://cldup.com/IgIzmaR5Pq-3000x3000.png" />
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
                Alexis Villegas
              </Typography>
              {" — I love to use react for my APPs!…"}
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
          <Avatar alt="Travis Howard" src="https://cldup.com/NEUjbtlvbq-2000x2000.png" />
        </ListItemAvatar>
        <ListItemText
          primary="Content Editor"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Roberto Patino
              </Typography>
              {" — Working hard is my personal motto…"}
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
          <Avatar alt="Cindy Baker" src="https://cldup.com/7mni8TDK13-3000x3000.png" />
        </ListItemAvatar>
        <ListItemText
          primary="Content Editor"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Zeny Nuñez
              </Typography>
              {' — I am ready to rock it out!…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
