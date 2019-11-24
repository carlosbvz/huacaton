import React, { useEffect, useState } from 'react'
import axios from "axios"
import Fab from '@material-ui/core/Fab';
import mic from '../assets/images/mic_white_48x48.png'
import DefaultLayout from '../layouts/DefaultLayout'
import TextField from '@material-ui/core/TextField'

import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'

export default function Feedback() {

    const [show, setShow] = useState([])

    const onClick = () => {
        setShow(false)
    }

    return (
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
            {show ?
                <>
                    <p>Did you find what you were looking for?</p>
                    <div>
                        <Button onClick={onClick} style={{ margin: '0px 20px' }} variant="contained" color="secondary">
                            Yes
            </Button>

                        <Button onClick={onClick} style={{ margin: '0px 20px' }} variant="contained">
                            No
            </Button>
                    </div>
                </>
                : ''}

        </div>
    )
}
