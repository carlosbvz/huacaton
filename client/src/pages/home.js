import React, { useEffect, useState } from 'react'
import axios from "axios"
import DefaultLayout from '../layouts/DefaultLayout'
import Button from '@material-ui/core/Button'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

export default function Home() {

  const [events, setEvents] = useState([])

  useEffect(() => {
    axios.get('/api/events')
      .then(data => {
        setEvents(data.data)
      });
  }, [])

  const createEvent = () => {
    axios.post('/api/events', {
      name: 'Adding new event',
      description: 'New event description'
    })
      .then(data => {
        // Do something here
      });
  }

  function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }

  return (
    <DefaultLayout>
      <p>Home Page</p>
      <Button variant="contained" color="secondary" onClick={createEvent}>
        Create new event
      </Button>
      <ListItemLink href="#simple-list">
        <ListItemText primary="Spam" />
      </ListItemLink>
    </DefaultLayout>
  )
}
