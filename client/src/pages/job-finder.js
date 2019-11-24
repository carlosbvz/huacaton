import React, { useEffect, useState } from 'react'
import axios from "axios"
import Fab from '@material-ui/core/Fab';
import DefaultLayout from '../layouts/DefaultLayout'
import TextField from '@material-ui/core/TextField'
import mic from '../assets/images/mic_white_48x48.png'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'

export default function Home() {

  const [events, setEvents] = useState([])

  useEffect(() => {
    // On Mount
  }, [])

  const home = {
    title: {
      fontSize: '1.75em',
      letterSpacing: '0',
      textAlign: 'center',
      fontWeight: '100',
    },
    mic: {
      height: '30px'
    }
  }

  const recordVoice = () => {
    // Record voice here
  }

  return (
    <DefaultLayout>

      <p style={home.title}>Tell me what you are looking for</p>
      
      <br /><br /><br />

      <p style={{ textAlign: 'center' }}>
        <Fab color="secondary" aria-label="add">
          <img src={mic} style={home.mic} />
        </Fab>
        <p style={{ marginTop: '10px' }} className='small-text'>Press to Record</p>
      </p>

      <br />
      <p style={{ textAlign: 'center' }}>or</p>
      <br />

      <TextField
        id="standard-multiline-flexible"
        label="Write it"
        multiline
        rows="1"
        className=''
        margin="normal"
        fullWidth
      />

      <br /><br /><br />
      <Link to="/companies">
        <Button variant="contained" color="primary" fullWidth>
          Next >
      </Button>
      </Link>

    </DefaultLayout>
  )
}
